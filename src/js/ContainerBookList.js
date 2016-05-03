import { connect } from 'react-redux'
import BookList from './BookList'
import { fetchBooks, setVisibilityFilter } from './actions'
import { VisibilityFilters } from './VisibilityFilters'

const getVisibleBooks = (books, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return books
    case VisibilityFilters.SHOW_READ:
      return books.filter(t => t.read)
    case VisibilityFilters.SHOW_UNREAD:
      return books.filter(t => !t.read)
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
    }
  }
}

const ContainerBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default ContainerBookList