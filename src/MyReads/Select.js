import React, { Component }	 from 'react'
import * as BooksAPI from './BooksAPI'


class Select extends Component {

	handleChange = (event) => {
      console.log(event.target.value)
      if(event.target.value !== 'move' && event.target.value !== 'none'){
          this.props.bookShelfChangeHandler(this.props.book, this.props.bookShelf, event.target.value);
      }
    };

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.props.bookShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
			</div>
 		 )
	}
}

export default Select
