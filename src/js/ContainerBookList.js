import { connect } from 'react-redux'
import BookList from './BookList'
import { fetchBooks } from './actions'

const mapStateToProps = (state) => {
  return {
    books: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBooks: () => {
      dispatch(fetchBooks())
    }
  }
}

const ContainerBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default ContainerBookList