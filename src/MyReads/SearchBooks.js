import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    searchQuery: '',
    searchResultsList: []
  }

  searchResultsHandler = (query) => {
    this.setState({ searchQuery: query})
    if(query) {
      BooksAPI.search(query).then( (searchResultsList) => {
        if(searchResultsList.error) {
          this.setState( { searchResultsList: [] });
        } else {
          this.setState({ searchResultsList: searchResultsList })
        }
      })
    } else {
      this.setState({ searchResultsList: [] })
    }
  }
  render() {
    return (
      <div className="list-books-content">
  	    <div className="search-books">
         <div className="search-books-bar">
           <Link
            className="close-search"
            to="/"
            >Close
          </Link>
        	<input
  			     className="search-books-input-wrapper"
  			     type="search"
  					 placeholder="Search by title or author"
             value={this.state.searchQuery || ""}
    			   onChange={(event) => this.searchResultsHandler(event.target.value)}
             aria-label="Search by title or author"
  		     />
        </div>
  		</div>
      <div className="search-books-results">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Search Results</h2>
          <p> searchResults is {this.state.searchQuery}</p>
          <ul className='books-grid'>
            {this.state.searchResultsList.map( book => {
              let bookShelf = 'none';
              this.props.allBooks.map(b => (
                b.id === book.id ? bookShelf = b.bookShelf : ''
              ))
              return(
                <li key={book.id}>
                  <Book
                    moveShelf={this.props.moveShelf}
                    book={book}
                    bookShelf={bookShelf}/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
   )
  }
}
export default SearchBooks
