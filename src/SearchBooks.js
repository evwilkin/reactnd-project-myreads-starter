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
      BooksAPI.search(query).then((books) => {
        if (books) {
          this.setState({ books });
        } else {
          this.setState({ books: [] });
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
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input
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
