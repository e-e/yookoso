import { combineReducers } from 'redux';
import {
  SELECT_BOOK,
  DESELECT_BOOK,
  SELECT_CHAPTER,
  DESELECT_CHAPTER,
  SELECT_TRACK,
  DESELECT_TRACK,
  FETCH_DATA,
  FETCHED_DATA,
  TOGGLE_AUTOPLAY,
  TOGGLE_AUTO_ADVANCE,
} from '../actions';
import {
  setLocalSettings,
  getLocalSettings
} from "../utils";

/**
 * @param {String} state
 * @param {Object} action
 * @param {String} action.type
 * @param {String} action.book
 * @returns {String}
 */
function books(state = '', action) {
  switch (action.type) {
    case SELECT_BOOK:
      return action.book;
    case DESELECT_BOOK:
      return '';
    case FETCHED_DATA:
      return action.data.books;
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
function chapters(state = '', action) {
  switch (action.type) {
    case SELECT_CHAPTER:
      return action.chapter;
    case DESELECT_CHAPTER:
      return '';
    case FETCHED_DATA:
      return action.data.chapters;
    default:
      return state;
  }
}

const DEFAULT_TRACKS = {};
function tracks(state = DEFAULT_TRACKS, action) {
  switch (action.type) {
    case FETCH_DATA:
      return state;
    case FETCHED_DATA:
      return action.data.tracks;
    default:
      return state;
  }
}

const DEFAULT_STATE_LOADED = false;
function loaded(state = DEFAULT_STATE_LOADED, action) {
  switch(action.type) {
    case FETCH_DATA:
      return DEFAULT_STATE_LOADED;
    case FETCHED_DATA:
      return true;
    default:
      return state;
  }
}


const DEFAULT_SETTINGS = getLocalSettings({
  autoplay: true,
  autoAdvance: true
});
function settings(state = DEFAULT_SETTINGS, action) {
  let newSettings = state;
  switch (action.type) {
    case TOGGLE_AUTOPLAY:
      console.log('toggling autoplay...');
      newSettings = { ...state, autoplay: !state.autoplay };
      break;
    case TOGGLE_AUTO_ADVANCE:
      newSettings = { ...state, autoAdvance: !state.autoAdvance };
      break;
    default:
      break;
  }
  setLocalSettings(newSettings);
  return newSettings;
}

const rootReducer = combineReducers({
  books,
  chapters,
  tracks,
  loaded,
  settings
});

export default rootReducer;