const fs = require('fs');
const config = require('../config');
const Controller = require('./controller');

class ApiController extends Controller {
  read(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  }
  async tracks(req, res) {
    const _data = await this.read(config.datapath);
    const data = this.organize(_data);
    res.send(data);
  }

  getBooks(data) {
    const books = {};
    const keys = Object.keys(data);
    keys.forEach(key => {
      const book = {
        name: key,
        id: data[key].id
      };
      books[book.id] = book;
    });
    return books;
  }

  getChapters(data) {
    const chapters = {};

    const books = Object.keys(data);
    books.forEach(bookName => {
      const book = data[bookName];
      book.chapters.forEach(chapter => {
        chapters[chapter.id] = {
          id: chapter.id,
          number: chapter.number,
          book_id: book.id,
        };
      })
    });

    return chapters;
  }

  convertTracksToArray(tracks) {
    const keys = Object.keys(tracks);
    const arr = [];
    keys.forEach(key => {
      arr.push(tracks[key]);
    });
    return arr;
  }

  getTracks(data) {
    const tracks = {};

    const books = Object.keys(data);
    books.forEach(bookName => {
      const book = data[bookName];
      book.chapters.forEach(chapter => {
        this.convertTracksToArray(chapter.tracks).forEach(track => {
          track.book_id = book.id;
          track.chapter_id = chapter.id;
          track.source = `/audio/${track.id}.m4a`;
          tracks[track.id] = track;
        })
      });
    });

    return tracks;
  }

  organize(data) {
    return {
      books: this.getBooks(data),
      chapters: this.getChapters(data),
      tracks: this.getTracks(data)
    };
  }
}

module.exports = ApiController;