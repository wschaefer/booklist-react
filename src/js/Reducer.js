import { RECEIVE_CREATED_BOOK, RECEIVE_BOOKS } from './actionTypes'

module.exports = {
  reducer: function (state, action) {
  	if (state === undefined) {
			return [];
  	}

    switch (action.type) {
			case RECEIVE_BOOKS:
				return action.books;
		  case RECEIVE_CREATED_BOOK:
				return [...state, action.book]
		  default:
		    return state
		}
  },
}