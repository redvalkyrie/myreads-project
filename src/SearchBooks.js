import React, { Component }	 from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
  state = {
    options: [
      {
        name: 'Move To...',
        value: null,
      },
      {
        name: 'Currently Reading',
        value: 'currentlyReading',
      },
      {
        name: 'Want to Read',
        value: 'wantToRead',
      },
      {
        name: 'Read',
        value: 'read',
      },
      {
        name: 'None',
        value: null
      },
    ],
    value: '?',
  };
	handleChange = (event) => {
      this.setState({ value: event.target.value });
      BooksAPI.update(this, this.state.value)
    };
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  render() {
    const { options, value } = this.state;
    return (
      <div className="bookshelf-books">
      <ol className='books-grid'>
    	  {this.props.books.map( (book) => (
    		<li key={book.id}>
      			<div className="book">
                    <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 193, 										backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={this.handleChange} value={value}>
								{options.map(item => (
									<option key={item.value ? (item.value) : (item.name)} value={item.value}>
										{item.name}
									</option>
								))}
                              </select>
                            </div>
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
