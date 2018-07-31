import React from 'react'
import { Link } from 'react-router-dom'


const SearchBooks = (props) => {
  return (
    <div>
	    <div className="search-books">
       <div className="search-books-bar">
         <Link
          className="close-search"
          to="/"
          onClick={props.changed}
          >Close
        </Link>
      	<input
			     className="search-books-input-wrapper"
			     type="search"
					 placeholder="Search by title or author"
  			   onChange={props.searchResults}
		     />
      </div>
		</div>
  </div>
 )
}

export default SearchBooks
