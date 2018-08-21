import React from 'react'

const Book = (props) => {
  const { book, moveShelf } = props;
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}
            alt={props.title}>
            <div className="book-shelf-changer">
              <select onChange={(event) => { moveShelf(props.book, event.target.value)}}
                value={props.shelf}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors ? book.authors : ''}</div>
    </div>
  )
}

export default Book
