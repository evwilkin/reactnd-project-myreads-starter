import React, { Component } from 'react'

const shelves = ['currentlyReading', 'wantToRead', 'read']

class ListBooks extends Component {

  render() {
    let shelfBooks = [];
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.forEach((shelf) => {
              return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      let shelfBooks = {this.props.books.filter((book) => {
                        return book.shelf === shelf
                      })}
                      {shelfBooks.map((book) => {
                        return (
                          <li>
                            <div className="book">
                              <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url({book.imageLinks.thumbnail})' }}></div>
                                <div className="book-shelf-changer">
                                  <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{book.title}</div>
                              {book.authors.map((author) => {
                                return <div className="book-authors">{author}</div>
                              })}
                            </div>
                          </li>
                        )
                      })}

                    </ol>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
        <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div>
      </div>
    )
  }
}

export default ListBooks
