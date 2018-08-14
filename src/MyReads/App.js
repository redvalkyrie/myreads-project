import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import Homepage from './Homepage'

class BooksApp extends Component {
  state = {
    allBooks: []
  }

  moveShelf = (book, targetShelf) => {
    BooksAPI.update(book, targetShelf).then(() => {
      book.bookShelf=targetShelf;
      this.setState(state => ({allBooks: state.allBooks.filter(b => b.id !== book.id).concat([book])}))
    })
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
	        <Homepage
            allBooks={this.state.allBooks}
            moveShelf={this.moveShelf}/>
            )} />
            <Route path="/search" render={()=> (
                <SearchBooks
                  moveShelf={this.moveShelf}
                  allBooks={this.state.allBooks}/>
            )} />
      </div>
    )
  }
}

export default BooksApp
