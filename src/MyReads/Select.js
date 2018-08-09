import React, { Component }	 from 'react'
import * as BooksAPI from './BooksAPI'


class Select extends Component {
  state = {
    options: [
      {
        name: 'Move To...',
        value: 'move',
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
        value: 'none'
      }
    ]
  }
	handleChange = (event) => {
      console.log(event.target.value)
      if(event.target.value !== 'move' && event.target.value !== 'none'){
          this.props.bookShelfChangeHandler(this.props.book, this.props.bookShelf, event.target.value);
      }
    };

  render() {
    const { options} = this.state;
    return (
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.props.bookShelf}>
					{options.map(item => (
							<option key={item.value} value={item.value}>
								{item.name}
							</option>
					))}
        </select>
			</div>
 		 )
	}
}

export default Select
