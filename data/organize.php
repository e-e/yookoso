<?php

class Organizer
{
    /**
     * @var string
     */
    private $basepath = "";

    /**
     * @var string
     */
    private $datafile = "tracks.json";

    private $sanitizedDir = "sanitized";

    private $sanitizedPath = "";

    /**
     * @var string
     */
    private $datapath = "";

    /**
     * @var string
     */
    private $extn = "mp3";

    /**
     * @var int
     */
    private $index = 0;

    /**
     * @var array
     */
    private $types = ["Workbook", "Textbook"];

    private $data = [];

    public function __construct()
    {
        $this->basepath = dirname(__FILE__);
        $this->datapath = "{$this->basepath}\\{$this->datafile}";
        $this->sanitizedPath = "{$this->basepath}\\{$this->sanitizedDir}";
    }

    /**
     * @param $property
     * @return mixed
     */
    public function __get($property)
    {
        if ($property === "id") {
            $this->index++;
            return $this->index;
        }

        if (property_exists($this, $property)) {
            return $this->$property;
        }
    }

    /**
     * @param string $extn
     */
    public function setExtension($extn)
    {
        $this->extn = $extn;
    }

    /**
     * @return void
     */
    public function organize()
    {
        foreach ($this->types as $type) {
            if (!isset($this->data[$type])) {
                $bookid = $this->id;
                $this->data[$type] = [
                    'id' => $bookid,
                    'chapters' => [],
                ];
            }
            foreach ($this->getChapters($type) as $ch) {
                $chapter = [
                    'id' => $this->id,
                    'number' => (int)$ch,
                    'tracks' => [],
                    'book_id' => $bookid,
                ];
                $tracks = $this->getTracks($type, $ch, $chapter['id']);
                $chapter['tracks'] = $tracks;
                $this->data[$type]['chapters'][$ch] = $chapter;
            }
        }
        $this->save();
    }

    /**
     * @return void
     */
    private function save()
    {
//        print_r($this->data);
        $json = json_encode($this->data);
        file_put_contents($this->datapath, $json);
    }

    /**
     * @param string[] ...$parts
     * @return string
     */
    private function path(...$parts)
    {
        $path = $this->basepath;
        foreach ($parts as $part) {
            $path = "$path\\$part";
        }
        return $path;
    }

    /**
     * @param $type
     * @param $chapter
     * @param int $chapterId
     * @return array
     */
    private function getTracks($type, $chapter, $chapterId)
    {
        $path = $this->path(strtolower($type), $chapter);
        $files = $this->scan($path);

        $tracks = [];
        $index = 1;
        foreach ($files as $file) {
            $track = $this->parseTrack($type, $chapter, $file);
            $track->chapter_id = $chapterId;
            $track->number = $index;
            $tracks[$track->id] = $track;
            $index++;
        }
        return $tracks;
    }

    /**
     * @param string $type
     * @return array
     */
    private function getChapters($type)
    {
        $path = $this->path(strtolower($type));
        return $this->scan($path);
    }

    /**
     * @param string $type
     * @param string|int $chapter
     * @param string $track - the track filename
     * @return object
     */
    private function parseTrack($type, $chapter, $track)
    {
        echo "$type / $chapter / $track\n";
        $info = (object)$this->trackInfo($track, $type, $chapter);

        $oldpath = $this->path(strtolower($type), $chapter, $track);
        $newpath = "{$this->sanitizedPath}\\{$info->id}.{$this->extn}";
//        copy($oldpath, $newpath);
//        $this->convert($newpath);
        $info->file = preg_replace("/m4a$/", "mp3", $info->file);
        echo "{$info->file}\n";

        return $info;
    }

    /**
     * @param string $path
     * @param string $regex
     * @return array
     */
    private function scan($path, $regex = "")
    {
        $files = scandir($path);
        $files = array_filter($files, function($f) use ($regex) {
            $notNavDir = $f !== "." && $f !== "..";

            if ($regex === "") {
                return $notNavDir;
            }

            $regexMatch = preg_match($regex, $f);

            return $notNavDir && $regexMatch;
        });

        return $files;
    }

    /**
     * @param $file
     * @return array
     */
    private function trackInfo($file, $type, $chapter)
    {
        $title = trim(preg_replace("/\." . $this->extn . "$/", '', trim($file)));
        $title = trim(preg_replace("/^\d+\-\d+\s*/", '', $title));
        $title = trim(preg_replace("/\((.*?)\)/", '', $title));
        $title = trim(preg_replace("/Chapter " . $chapter . "/", "", $title));
        $title = preg_replace("/\./", " ", $title);
        $title = preg_replace("/[_-]/", " ", $title);
        $title = trim(preg_replace("/\s+/", " ", $title));
//        $title = trim(preg_replace("/\[(.*?)[^\]]$/", "", $title));

        return [
            'file' => $file,
            'id' => $this->id,
            'title' => $title,
            'book' => $type,
            'chapter' => $chapter
        ];
    }

    /**
     * ffmpeg -i FILE.m4a FILE.mp3
     */
    private function convert($path)
    {
        $fromPath = $path;
        $toPath = preg_replace("/m4a$/", "mp3", $path);

        $cmd = "ffmpeg -loglevel quiet -i \"$fromPath\" \"$toPath\"";
        exec($cmd);
    }

}


$o = new Organizer();
$o->setExtension('m4a');
$o->organize();