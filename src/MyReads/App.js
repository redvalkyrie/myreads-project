import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    allBooks: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

	bookShelfChangeHandler= (book, currentBookShelf, shelf) => {
    console.log("bookShelfChangeHandler has been activated")
    console.log("This books current shelf is: ", currentBookShelf)
    console.log("The targeted shelf is: ", shelf)
    let arrayHolder;
    if(currentBookShelf !== shelf) {
      switch(currentBookShelf){
        case "allBooks":
          console.log("This book will move from ", currentBookShelf);
          arrayHolder = this.state.allBooks.filter( t => t !== book);
          this.setState({ allBooks: arrayHolder})
          console.log(this.state.allBooks)
          break;
          case "currentlyReading":
            console.log("This book will move from ", currentBookShelf);
            arrayHolder = this.state.currentlyReading.filter( t => t !== book);
            this.setState({ currentlyReading: arrayHolder })
            console.log(this.state.currentlyReading)
            break;
        case "wantToRead":
          console.log("This book will move from ", currentBookShelf);
          arrayHolder = this.state.wantToRead.filter( t => t !== book);
          this.setState({ wantToRead: arrayHolder})
          break;
        case "read":
          console.log("This book will move from ", currentBookShelf);
          arrayHolder = this.state.read.filter( t => t !== book);
          this.setState({ read: arrayHolder})
          break;
        default:
          break;
      }
      switch(shelf){
        case "currentlyReading":
          console.log("This book will move to ", shelf);
          this.setState( {currentlyReading: this.state.currentlyReading.concat( [book] )});
          break;
        case "wantToRead":
          console.log("This book will move to ", shelf);
          this.setState( {wantToRead: this.state.wantToRead.concat( [book] )});
          break;
        case "read":
          console.log("This book will move to ", shelf);
          this.setState( {read: this.state.read.concat( [book] )});
          break;
        default:
          break;
      }
    }
  }

	componentDidMount() {
      BooksAPI.getAll().then( (allBooks)=>{
      	this.setState( { allBooks })
	  })
  }
  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-content">
              <div className="bookshelf">
                <h2 className="bookshelf-title">All Books</h2>
                <ListBooks books={this.state.allBooks}
                  bookShelfChangeHandler={this.bookShelfChangeHandler}
                  bookShelf='allBooks'/>
                </div>
      	        <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <ListBooks books={this.state.currentlyReading}
                  bookShelfChangeHandler={this.bookShelfChangeHandler}
                  bookShelf='currentlyReading' />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
               	  <ListBooks books={this.state.wantToRead}
                  bookShelfChangeHandler={this.bookShelfChangeHandler}
                  bookShelf='wantToRead' />
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
          			     <ListBooks books={this.state.read}
                      bookShelfChangeHandler={this.bookShelfChangeHandler}
                      bookShelf='read'/>
                </div>
                <div className="open-search">
                  <Link
                    to="/search"
                    className="search-button"
                  //  onClick={this.toggleSearchHandler}
                    >Add a book</Link>
                  </div>
                </div>
              </div>

            )} />
            <Route path="/search" render={()=> (
              <div className="list-books-content">
                <SearchBooks
                  onToggleSearchHandler={this.toggleSearchHandler}
                  bookShelfChangeHandler={this.bookShelfChangeHandler}/>
              </div>
            )} />
      </div>
    )
  }
}

export default BooksApp
