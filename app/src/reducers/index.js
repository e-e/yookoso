import { combineReducers } from 'redux';
import {
  SELECT_BOOK,
  DESELECT_BOOK,
  SELECT_CHAPTER,
  DESELECT_CHAPTER,
  SELECT_TRACK,
  DESELECT_TRACK,
  FETCH_DATA,
  FETCHED_DATA
} from '../actions';

/**
 * @param {String} state
 * @param {Object} action
 * @param {String} action.type
 * @param {String} action.book
 * @returns {String}
 */
function book(state = '', action) {
  switch (action.type) {
    case SELECT_BOOK:
      return action.book;
    case DESELECT_BOOK:
      return '';
    default:
      return state;
  }
}

/**
 * @param {String} state
 * @param {Object} action
 * @param {String} action.type
 * @param {String} action.chapter
 * @returns {String}
 */
function chapter(state = '', action) {
  switch (action.type) {
    case SELECT_CHAPTER:
      return action.chapter;
    case DESELECT_CHAPTER:
      return '';
    default:
      return state;
  }
}

/**
 * @param {String} state
 * @param {Object} action
 * @param {String} action.type
 * @param {String} action.track
 * @returns {String}
 */
function track(state = '', action) {
  switch (action.type) {
    case SELECT_TRACK:
      return action.track;
    case DESELECT_TRACK:
      return '';
    default:
      return state;
  }
}

function tracks(state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  book,
  chapter,
  track,
  tracks
});

export default rootReducer;