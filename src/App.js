import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }

  showSearchPage = () => {
    this.setState({ showSearchPage: true })
  }

  showListPage = () => {
    this.setState({ showSearchPage: false })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      console.log(books);
      this.setState({ books });
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks showListPage={this.showListPage} />
        ) : (
        <div>
          <ListBooks books={this.state.books} shelf='currentlyReading' shelfName='Currently Reading' showSearchPage={this.showSearchPage} />
          <ListBooks books={this.state.books} shelf='wantToRead' shelfName='Want to Read' showSearchPage={this.showSearchPage} />
          <ListBooks books={this.state.books} shelf='read' shelfName='Read' showSearchPage={this.showSearchPage} />
        </div>
        )}
      </div>
    )
  }
}

export default BooksApp
