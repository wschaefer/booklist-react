import { ADD_BOOK } from './actionTypes'

export function addBook(book) {
  return { type: ADD_BOOK, book }
}
