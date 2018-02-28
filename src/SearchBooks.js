import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    books: [],
    query: ''
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
          this.setState({
            books: results,
            query: query
          });
        } else {
          this.setState({
            books: [],
            query: query
          });
        }
      });
    } else {
      this.setState({
        books: [],
        query: ''
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    /* Fix for state not finished updating before page renders when search input is cleared quickly */
    let searchTerm = document.querySelector('.search-books-input-wrapper > input').value;
    if (this.state.query !== searchTerm) {
      this.setState({ query: searchTerm });
    }
  }

  render () {
    return (
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
        {/* Only load below if a search input is not blank */}
        {this.state.query.length !== 0 && (
          <div className='search-books-results'>
            {this.state.books.length !== 0 ? (
              <ListBooks
                books={this.state.books}
                changeShelf={this.props.changeShelf} />
            ) : (
              <p>No results found, please try another search</p>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SearchBooks;
