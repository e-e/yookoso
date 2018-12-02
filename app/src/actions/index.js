export const SELECT_BOOK = 'SELECT_BOOK';
export const DESELECT_BOOK = 'DESELECT_BOOK';
export const SELECT_CHAPTER = 'SELECT_CHAPTER';
export const DESELECT_CHAPTER = 'DESELECT_CHAPTER';
export const SELECT_TRACK = 'SELECT_TRACK';
export const DESELECT_TRACK = 'DESELECT_TRACK';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCHED_DATA = 'FETCHED_DATA';

export function selectBook(book) {
  console.log('SELECT_BOOK', book);
  return (dispatch, getState) => {
    dispatch({ type: SELECT_BOOK, book });
  };
}

export function selectChapter(chapter) {
  return (dispatch, getState) => {
    dispatch({ type: SELECT_CHAPTER, chapter });
  };
}

export function selectTrack(track) {
  return (dispatch, getState) => {
    dispatch({ type: SELECT_TRACK, track });
  };
}
