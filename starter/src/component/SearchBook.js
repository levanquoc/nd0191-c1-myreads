import React from 'react';
import {Link } from 'react-router-dom';
export const SearchBook = () => {
  return (
  <div className="search-books">
    <div className="search-books-bar">
      {/* <a className="close-search" onClick={() => setShowSearchpage(!showSearchPage)} */}
      <Link to='/a' className="close-search" style={{ color: 'blue', textDecoration: 'underline' }}>
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  </div>
  )
}
