import React, { Component }	 from 'react'
import * as BooksAPI from './BooksAPI'


class Select extends Component {
  state = {
    options: [
      {
        name: 'Move To...',
        value: '',
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
        value: ''
      },
    ],
    selectedOption: '',
  };
	handleChange = (event) => {
      console.log('events value', event.target.value)
      let theOption = event.target.value;
      this.setState({selectedOption: theOption});
      console.log('selectedOption', this.state.selectedOption);
      this.props.bookShelfChangeHandler(this.props.book, this.props.bookShelf, event.target.value);
    };

  render() {
    const { options, selectedOption } = this.state;
    return (
           <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.state.selectedOption}>
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
