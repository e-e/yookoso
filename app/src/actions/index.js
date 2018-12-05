import { debug } from '../utils';

export const SELECT_BOOK = 'SELECT_BOOK';
export const DESELECT_BOOK = 'DESELECT_BOOK';
export const SELECT_CHAPTER = 'SELECT_CHAPTER';
export const DESELECT_CHAPTER = 'DESELECT_CHAPTER';
export const SELECT_TRACK = 'SELECT_TRACK';
export const DESELECT_TRACK = 'DESELECT_TRACK';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCHED_DATA = 'FETCHED_DATA';

export const TOGGLE_AUTOPLAY = 'TOGGLE_AUTOPLAY';
export const TOGGLE_AUTO_ADVANCE = 'TOGGLE_AUTO_ADVANCE';

export function selectBook(book) {
  debug('SELECT_BOOK', book);
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

export function fetchData() {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_DATA,
    });
  };
}

export function fetchedData(data) {
  return (dispatch, getState) => {
    dispatch({
      type: FETCHED_DATA,
      data: data
    });
  };
}

export function toggleAutoplay() {
  debug('toggle autoplay');
  return (dispatch) => {
    dispatch({
      type: TOGGLE_AUTOPLAY
    })
  }
}

export function toggleAutoAdvance() {
  debug('toggleAutoAdvance');
  return (dispatch) => {
    debug('dispatch toggleAutoAdvance');
    dispatch({
      type: TOGGLE_AUTO_ADVANCE
    })
  }
}