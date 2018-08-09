import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

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
          console.log(this.state.searchResultsList)
      })
    } else {
      this.setState({ searchResultsList: [] })
    }
  }
  render() {
    let searchCheck;
    console.log('searchResults', this.state.searchQuery)
    console.log('searchResultsList', this.state.searchResultsList)
    if(this.state.searchQuery && this.state.searchResultsList !== []) {
      searchCheck = <ListBooks books={this.state.searchResultsList}
                      bookShelf='none'
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
            //onClick={this.props.onToggleSearchHandler}
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
          {searchCheck}
        </div>
      </div>
    </div>
   )
  }
}
export default SearchBooks
