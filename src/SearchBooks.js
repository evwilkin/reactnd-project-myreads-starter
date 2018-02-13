import React, { Component } from 'react';
import ListBooks from './ListBooks';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {
  state = {
    query: ''
  }

  filterBooks = (query) => {
    this.setState({ query: query });
  }

  render () {
    let filteredBooks;
    if (this.state.query) {
      let searchTerm = new RegExp(this.state.query, 'i');
      filteredBooks = this.props.books.filter((book) => {
        return searchTerm.test(book.title);
      });
    } else {
      filteredBooks = this.props.books;
    }

    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          {/*<a className='close-search' onClick={() => this.props.showListPage()}>Close</a>*/}
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
          <ListBooks
            books={filteredBooks}
            changeShelf={this.props.changeShelf}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
