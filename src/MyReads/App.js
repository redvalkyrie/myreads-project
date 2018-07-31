import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    screen: 'list',
    searchResults: '',
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    searchResultsList: []
  }

	moveTocurrentlyReading= (book) => {
      BooksAPI.update(book).then(book => {
      	this.setState(state => ({
        currentlyReading: state.currentlyReading.concat([ book ])
      	}))
      })
    }
	componentWillMount() {
      BooksAPI.getAll().then( (allBooks)=>{
      	this.setState( { allBooks })
	  })
    }

  toggleSearchHandler = () => {
    let currentScreen = this.state.screen;
    console.log("states current screen state is ", currentScreen);
    if (currentScreen === 'list') {
      currentScreen = 'search';
      this.setState({screen: currentScreen});
      console.log("states current screen state is ", currentScreen);
    } else {
      currentScreen = 'list';
      this.setState({screen: currentScreen, searchResults: '', searchResultsList: []});
      console.log("states current screen state is ", currentScreen);
    }
  }

  searchResultsHandler = (event) => {
    this.setState({ searchResults: event.target.value})
    BooksAPI.search(this.state.searchResults).then( (searchResultsList) => {
        this.setState( { searchResultsList })
      })
  }

  render() {
    let searchCheck;
    console.log('searchResults', this.state.searchResults)
    console.log('searchResultsList', this.state.searchResultsList)
    if(this.state.searchResultsList) {
      searchCheck = <ListBooks books={this.state.searchResultsList} />
    } else {
      searchCheck = <p>No results to display!</p>
    }
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
            {this.state.screen === 'list' ? (
              <div className="list-books-content">
                <div className="bookshelf">
                  <h2 className="bookshelf-title">All Books</h2>
                  <ListBooks books={this.state.allBooks} />
                </div>
      	        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <ListBooks books={this.state.currentlyReading} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
               	  <ListBooks books={this.state.wantToRead} />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
          			     <ListBooks books={this.state.read} />
                </div>
                <div className="open-search">
                  <Link
                    to="/search"
                    className="search-button"
                    onClick={this.toggleSearchHandler}
                    >Add a book</Link>
                </div>
              </div>
            ) :
              <div className="list-books-content">
                <SearchBooks
                  books={this.state.allBooks}
                  changed={this.toggleSearchHandler}
                  searchResults={this.searchResultsHandler}/>
                <div className="search-books-results">
        			    <div className="bookshelf">
        			      <h2 className="bookshelf-title">Search Results</h2>
                    <p> searchResults is {this.state.searchResults}</p>
                    {searchCheck}
        			    </div>
        				</div>
              </div>
            }
          </div>
        </div>
    )
  }
}

export default BooksApp
