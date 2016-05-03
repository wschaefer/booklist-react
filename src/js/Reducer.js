import { RECEIVE_CREATED_BOOK, RECEIVE_BOOKS, SET_VISIBILITY_FILTER } from './actionTypes'
import { VisibilityFilters } from './VisibilityFilters'

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  books: []
}

function books(state = [], action) {
	switch (action.type) {
		case RECEIVE_BOOKS:
		  return action.books
	  case RECEIVE_CREATED_BOOK:
      return [...state, action.book]
    default:
      return state
	}
}

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

module.exports = {
  reducer: function (state = initialState, action) {
    return {
	    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
	    books: books(state.books, action)
	  }
  }
}