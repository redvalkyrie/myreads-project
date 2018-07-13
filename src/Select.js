import React, { Component }	 from 'react'
import * as BooksAPI from './BooksAPI'


class Select extends Component {
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

  render() {
    const { options, value } = this.state;
    return (
           <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={value}>
					{options.map(item => (
							<option key={item.value ? (item.value) : (item.name)} value={item.value}>
								{item.name}
							</option>
					))}
        </select>
			</div>
 		 )
	}
}

export default Select
