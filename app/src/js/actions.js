import fetch from 'isomorphic-fetch'
import { 
  REQUEST_BOOKS, RECEIVE_BOOKS,
  REQUEST_CREATE_BOOK, RECEIVE_CREATED_BOOK,
  SET_VISIBILITY_FILTER,
  REQUEST_MARK_AS_READ, RECEIVE_MARK_AS_READ
} from './actionTypes'

const API_SERVER = "http://booklist-server.cfapps.io";

function requestBooks() {
  return {
    type: REQUEST_BOOKS
  }
}

function receiveBooks(json) {
  return {
    type: RECEIVE_BOOKS,
    books: json
  }
}

export function fetchBooks() {
  return dispatch => {
    dispatch(requestBooks())
    return fetch(`${API_SERVER}/books.json`)
      .then(response => response.json())
      .then(json => dispatch(receiveBooks(json)))
  }
}

function requestCreateBook() {
  return {
    type: REQUEST_CREATE_BOOK
  }
}

function receiveCreatedBook(json) {
  return {
    type: RECEIVE_CREATED_BOOK,
    book: json
  }
}

export function createBook(book) {
  return dispatch => {
    dispatch(requestCreateBook(book))
    return fetch(`${API_SERVER}/books`,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(book)
      })
      .then(response => response.json())
      .then(json => dispatch(receiveCreatedBook(json)))
  }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter: filter }
}

export function requestMarkAsRead(bookId) {
  return {type: REQUEST_MARK_AS_READ, bookId: bookId}
}

export function receiveMarkAsRead(bookId) {
  return {type: RECEIVE_MARK_AS_READ, bookId: bookId}
}

export function markAsRead(bookId) {
  return dispatch => {
    dispatch(requestMarkAsRead(bookId))
    return fetch(`${API_SERVER}/books/${bookId}`,
      {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({read: true})
      })
      .then(response => response.json())
      .then(json => dispatch(receiveMarkAsRead(bookId)))
  }
}