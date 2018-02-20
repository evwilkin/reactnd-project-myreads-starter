import React, { Component } from 'react';
import ListBooks from './ListBooks';

class BookShelf extends Component {
  render () {
    // Filter out books that match shelf from all books
    let shelfBooks = this.props.books.filter((book) => {
      return book.shelf === this.props.shelf;
    });

    return (

      <div className='list-books-content'>
        <div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>{this.props.shelfName}</h2>
            <div className='bookshelf-books'>
              {shelfBooks && (
                <ListBooks
                  books={shelfBooks}
                  changeShelf={this.props.changeShelf} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
