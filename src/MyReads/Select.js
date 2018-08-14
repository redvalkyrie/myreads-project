import React, { Component }	 from 'react'
class Select extends Component {

	handleChange = (event) => {
      if(event.target.value !== 'move' && event.target.value !== 'none'){
          this.props.moveShelf(this.props.book, event.target.value);
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
