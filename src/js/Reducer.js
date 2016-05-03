import { RECEIVE_CREATED_BOOK, RECEIVE_BOOKS, SET_VISIBILITY_FILTER } from './actionTypes'
import { VisibilityFilters } from './VisibilityFilters'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  books: []
}

module.exports = {
  reducer: function (state = initialState, action) {
    switch (action.type) {
			case RECEIVE_BOOKS:
			  return Object.assign({}, state, {
	        books: action.books
	      })
		  case RECEIVE_CREATED_BOOK:
        return Object.assign({}, state, {
	        books: [...state.books, action.book]
	      })
			case SET_VISIBILITY_FILTER:
				return Object.assign({}, state, {
	        visibilityFilter: action.filter
	      })
		  default:
		    return state
		}
  },
}