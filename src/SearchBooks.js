import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	state = {
      query: '',
      searchResults: []
    }
	updateQuery = (query) => {
    	let trimmedQuery = query.replace(/^\s+/, '')
  		this.setState({
    		query: trimmedQuery
 	 	})
	}

  render() {
    const { books } = this.props

    if(this.state.query) {
      console.log(this.state.query)
      BooksAPI.search(this.state.query).then(books => {
        console.log(books)
        this.setState({ books })

      })

    } else {
      this.state.searchResults=books
    }
    return (
      <div>
	    <div className="search-books">
       <div className="search-books-bar">
         <Link
          className="close-search"
          to="/"
          onClick={() => this.setState({ screen: 'list' })}
          >Close
        </Link>
      	<input
			     className="search-books-input-wrapper"
			     type="text"
			     placeholder="Search by title or author"
           value={this.state.query}
  			   onChange={(event) => this.updateQuery(event.target.value)}
		     />
      </div>
    </div>
    <div className="bookshelf">
      <h2 className="bookshelf-title">Search Results</h2>
        <ListBooks books={this.state.searchResults}/>
    </div>
    </div>
   )
  }
}
export default SearchBooks
