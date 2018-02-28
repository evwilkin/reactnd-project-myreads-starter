import React, { Component } from 'react';

class ListBooks extends Component {
  render () {
    return (
      <ol className='books-grid'>
        { this.props.books.map((book) => (
          <li key={book.id}>
            <div className='book'>
              <div className='book-top'>
                <div className='book-cover' alt={`${book.title} book cover`} style={{
                  width: 128,
                  height: 193,
                  // Confirm book has images & thumbnail image otherwise set backgroundImage blank
                  backgroundImage: (
                    book.hasOwnProperty('imageLinks') && book.imageLinks.hasOwnProperty('thumbnail')
                  ) ? `url(${book.imageLinks.thumbnail})` : ''
                }} />
                <div className='book-shelf-changer'>
                  <select
                    defaultValue={book.shelf || 'none'}
                    onChange={(e) => this.props.changeShelf(book, e.target.value)}
                  >
                    <option value='none' disabled>Move to...</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                  </select>
                </div>
              </div>
              <div className='book-title'>{book.title}</div>
              {/* Confirm authors array exists before mapping through it */}
              {book.authors && book.authors.map((author, idx) => {
                return <div key={idx} className='book-authors'>{author}</div>;
              })}
            </div>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListBooks;
