import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class SearchBooks extends Component {
  render() {
    let searchCheck;
    console.log('searchResults', this.props.searchResults)
    console.log('searchResultsList', this.props.searchResultsList)
    if(this.props.searchResultsList && this.props.searchResultsList !== []) {
      searchCheck = <ListBooks books={this.props.searchResultsList}
                      bookShelf='searchResultsList'
                      bookShelfChangeHandler={this.props.bookShelfChangeHandler}/>
    } else {
      searchCheck = <p>No results to display!</p>
    }

    return (
      <div>
  	    <div className="search-books">
         <div className="search-books-bar">
           <Link
            className="close-search"
            to="/"
            onClick={this.props.onToggleSearchHandler}
            >Close
          </Link>
        	<input
  			     className="search-books-input-wrapper"
  			     type="search"
  					 placeholder="Search by title or author"
    			   onChange={this.props.searchResultsHandler}
             aria-label="Search by title or author"
  		     />
        </div>
  		</div>
      <div className="search-books-results">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Search Results</h2>
          <p> searchResults is {this.props.searchResults}</p>
          {searchCheck}
        </div>
      </div>
    </div>
   )
  }
}
export default SearchBooks
