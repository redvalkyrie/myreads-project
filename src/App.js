import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
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
    showSearchPage: false,
    allBooks: [],
    currentlyReading: [
      {
        "id": "PGR2AwAAQBAJ",
        "title": "To Kill a Mockingbird",
        "authors": "Harper Lee",
        "smallThumbnail": "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api"
      },
      {
        "id": "uu1mC6zWNTwC",
        "title": "1776",
        "authors": "David McCullough",
        "smallThumbnail": "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
      }
    ],
    wantToRead: [],
    read: [],
  }
	moveTocurrentlyReading= (book) => {
      BooksAPI.update(book).then(book => {
      	this.setState(state => ({
        currentlyReading: state.currentlyReading.concat([ book ])
      	}))
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
        {this.state.showSearchPage ? (
          <SearchBooks showSearchPage={this.state.showSearchPage}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">All Books</h2>
                    <ListBooks books={this.state.allBooks}/>
                </div>
				<div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
               	  <ListBooks books={this.state.wantToRead}/>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
          			<ListBooks books={this.state.read}/>
                </div>
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
