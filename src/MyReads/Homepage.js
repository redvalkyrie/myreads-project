import React from 'react'
import ListBooks from './ListBooks'
import { Link } from 'react-router-dom'

const Homepage = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <ListBooks books={props.allBooks.filter((book) => book.bookShelf ==='currentlyReading')}
          moveShelf={props.moveShelf}
          bookShelf='currentlyReading' />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <ListBooks books={props.allBooks.filter((book) => book.bookShelf ==='wantToRead')}
          moveShelf={props.moveShelf}
          bookShelf='wantToRead' />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <ListBooks books={props.allBooks.filter((book) => book.bookShelf ==='read')}
          moveShelf={props.moveShelf}
          bookShelf='read' />
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

export default Homepage;
