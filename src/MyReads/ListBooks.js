import React, { Component }	 from 'react'
import PropTypes from 'prop-types'
import Select from './Select'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }
  componentDidMount() {
      BooksAPI.getAll().then( (books)=>{
      	this.setState( { books })
	  })
  }
  render() {
    let bookShelf;
    console.log("ListBooks component called", this.props.books)

    return (
      <div className="bookshelf-books">
      <ol className='books-grid'>
    	  {this.props.books.map( (book) => (
    		<li key={book.id}>
      			<div className="book">
                    <div className="book-top">
                       <div className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}
                        alt={book.title}></div>
                            <Select title="Move to"
                              moveTocurrentlyReading={this.props.moveTocurrentlyReading}
                              book={book}/>
                          </div>
                        	 <div className="book-title">{book.title}</div>
                      	    <div className="book-authors">{book.authors}</div>
                    	  </div>
						</li>
    				))}
      			</ol>
			</div>
 		 )
	}
}

export default ListBooks
