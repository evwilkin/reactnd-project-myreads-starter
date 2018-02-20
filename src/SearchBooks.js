import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    books: []
  }

  filterBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((results) => {
        if (results && !results.error) {
          results.forEach((result) => {
            // Check each book against existing shelves & assign shelf as needed
            for (var book in this.props.books) {
              if (result.id === this.props.books[book].id) {
                result.shelf = this.props.books[book].shelf;
              }
            }
            return results;
          });
          this.setState({books: results});
        } else {
          this.setState({books: []})
        }
      });
    } else {
      this.setState({books: []});
    }
  }

  render () {
    return (
      this.state.books && (
        <div className='search-books'>
          <div className='search-books-bar'>
            <Link to='/' className='close-search' />
            <div className='search-books-input-wrapper'>
              <input autoFocus
                type='text'
                placeholder='Search by title or author'
                onChange={(e) => this.filterBooks(e.target.value)} />
            </div>
          </div>
          <div className='search-books-results'>
            {this.state.books && (
              <ListBooks
                books={this.state.books}
                changeShelf={this.props.changeShelf}
              />
            )}
          </div>
        </div>
      )
    );
  }
}

export default SearchBooks;
