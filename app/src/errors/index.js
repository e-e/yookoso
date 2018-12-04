export class BookNotFoundError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, BookNotFoundError);
  }
}

export class ChapterNotFoundError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, ChapterNotFoundError);
  }
}

export class TrackNotFoundError extends Error {
  constructor(...args) {
    super(...args);
    Error.captureStackTrace(this, TrackNotFoundError);
  }
}