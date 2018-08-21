import React, { Component } from 'react'
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'

class Homepage extends Component {
  render() {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <ListBooks books={this.props.allBooks.filter((book) => book.shelf ==='currentlyReading')}
          moveShelf={this.props.moveShelf}
          shelf='currentlyReading' />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <ListBooks books={this.props.allBooks.filter((book) => book.shelf ==='wantToRead')}
          moveShelf={this.props.moveShelf}
          shelf='wantToRead' />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <ListBooks books={this.props.allBooks.filter((book) => book.shelf ==='read')}
          moveShelf={this.props.moveShelf}
          shelf='read' />
        </div>
        <div className="open-search">
          <Link
            to="/search"
            className="search-button"
            >Add a book</Link>
        </div>
      </div>
    </div>
  )
}
}

export default Homepage
