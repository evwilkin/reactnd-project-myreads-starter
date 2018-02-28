import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import MyReads from './MyReads'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
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
    BooksAPI.update(book, shelf).then((res) => {
      // If book already on a shelf, update shelf
      if (this.state.books.some((bk) => bk.id === book.id)) {
        let updatedBooks = this.state.books.map((bk) => {
          if (bk.id === book.id) {
            bk.shelf = shelf;
          }
          return bk;
        });
        this.setState({ books: updatedBooks });
      // Else add book & assign shelf
      } else {
        BooksAPI.get(book.id).then((res) => {
          let updatedBooks = this.state.books.slice();
          updatedBooks.push(res);
          this.setState({books: updatedBooks});
        })
      }
      // )
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  render() {
    return (
      <div className="app">
        <Route
          exact path='/'
          render={() => (
            <MyReads
              shelves={this.state.shelves}
              books={this.state.books}
              showSearchPage={this.showSearchPage}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route
          path='/search'
          render={() => (
            <SearchBooks
              showListPage={this.showListPage}
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;
