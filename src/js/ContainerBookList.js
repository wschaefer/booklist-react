import { connect } from 'react-redux'
import BookList from './BookList'

const mapStateToProps = (state) => {
  return {
    books: state
  }
}

const ContainerBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

const mapDispatchToProps = (dispatch) => {
  return {  }
}

export default ContainerBookList