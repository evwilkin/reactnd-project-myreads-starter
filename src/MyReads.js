import React, { Component } from 'react';
import BookShelf from './BookShelf';

class MyReads extends Component {
  render () {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        {/* Loop through all shelves & create each BookShelf component */}
        { this.props.shelves.map((shelf) => (
          <BookShelf
            key={shelf.shelf}
            books={this.props.books}
            shelf={shelf.shelf}
            shelfName={shelf.shelfName}
            changeShelf={this.props.changeShelf}
          />
        )) }
        <div className='open-search'>
          <a onClick={() => this.props.showSearchPage()}>Add a book</a>
        </div>
      </div>
    );
  }
}

export default MyReads;
