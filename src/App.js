import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'
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
    books: [],
    shelves: [
      {
        shelf: 'currentlyReading',
        shelfName: 'Currently Reading'
      },
      {
        shelf: 'wantToRead',
        shelfName: 'Want to Read'
      },
      {
        shelf: 'read',
        shelfName: 'Read'
      }
    ]
  }

  showSearchPage = () => {
    this.setState({ showSearchPage: true })
  }

  showListPage = () => {
    this.setState({ showSearchPage: false })
  }

  changeShelf = (book, shelf) => {
    let updatedBooks = this.state.books.map((bk) => {
      if (book.id === bk.id) {
        bk.shelf = shelf;
      }
      return bk;
    });
    this.setState({ books: updatedBooks });
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
          <SearchBooks
            showListPage={this.showListPage}
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        ) : (
        <div>
          <MyReads
            shelves={this.state.shelves}
            books={this.state.books}
            showSearchPage={this.showSearchPage}
            changeShelf={this.changeShelf}
          />
        </div>
        )}
      </div>
    )
  }
}

export default BooksApp
