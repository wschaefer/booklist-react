import { connect } from 'react-redux'
import BookList from './BookList'
import { fetchBooks, setVisibilityFilter, markAsRead } from './actions'
import { VisibilityFilters } from './VisibilityFilters'

const getVisibleBooks = (books, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return books
    case VisibilityFilters.SHOW_READ:
      return books.filter(book => book.read)
    case VisibilityFilters.SHOW_UNREAD:
      return books.filter(book => !book.read)
  }
}

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(state.books, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => {
      dispatch(fetchBooks())
    },
    setVisibilityFilter: (filter) => {
      dispatch(setVisibilityFilter(filter))
    },
    markAsRead: (bookId) => {
      dispatch(markAsRead(bookId))
    }
  }
}

const ContainerBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default ContainerBookList