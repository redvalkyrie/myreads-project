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
          this.shelfChecker(this.props.allBooks, this.state.searchResultsList)
      })
    } else {
      this.setState({ searchResultsList: [] })
    }
  }

  shelfChecker = (mainList, queryList) => {
    console.log("searchChecker has been activated.")
    queryList.map((book) => {
      let bookShelf = 'none';
      console.log("this book is ", book)
      let mainIndex = mainList.indexOf(book.id)
      console.log("mainIndex is ", mainIndex)
      if(mainIndex > -1) {
        let mainBook = mainList[mainIndex];
        console.log("mainBook is ",mainBook)
        bookShelf = mainBook.bookShelf;
      }
      book.bookShelf = bookShelf;
      return queryList;
    })
  }

  render() {
    let searchCheck;
    console.log('searchResults', this.state.searchQuery)
    console.log('searchResultsList', this.state.searchResultsList)
    if(this.state.searchQuery && this.state.searchResultsList !== []) {
      searchCheck = <ListBooks books={this.state.searchResultsList}
                      moveShelf={this.props.moveShelf}/>
    } else {
      searchCheck = <p>No results to display!</p>
    }

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
          {searchCheck}
        </div>
      </div>
    </div>
   )
  }
}
export default SearchBooks
