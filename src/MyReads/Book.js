import React from 'react'
import Select from './Select'

const Book = (props) => {
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`}}
            alt={props.title}>
        </div>
            <Select title="Move to"
              moveShelf={props.moveShelf}
              book={props.book}
              bookShelf={props.bookShelf}/>
            </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors ? props.book.authors : ''}</div>
      </div>
  )
}

export default Book;
