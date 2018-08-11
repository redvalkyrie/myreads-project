import React, { Component }	 from 'react'
import Book from './Book'

class ListBooks extends Component {
  render() {
    let displayBooks;
    if(this.props.books === undefined || this.props.books.length === null || this.props.books.length === 0) {
      displayBooks = <p> This shelf is empty!</p>
    } else {
      displayBooks =
      <ul className='books-grid'>
    	  {this.props.books.map( (book) => (
    		  <li key={book.id}>
            <Book
              moveShelf={this.props.moveShelf}
              book={book}
              bookShelf={book.bookShelf}/>
				  </li>
    		))}
  	  </ul>
    }
    return (
      <div className="bookshelf-books">
      {displayBooks}
			</div>
 		 )
	}
}

export default ListBooks
