import React, { Component }	 from 'react'
import PropTypes from 'prop-types'
import Select from './Select'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }
  componentWillMount() {
      BooksAPI.getAll().then( (books)=>{
      	this.setState( { books })
	  })
  }
  render() {

    return (
      <div className="bookshelf-books">
      <ol className='books-grid'>
    	  {this.props.books.map( (book) => (
    		<li key={book.id}>
      			<div className="book">
                    <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <Select title="Move to" />
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
