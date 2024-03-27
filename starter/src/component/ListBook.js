import React from 'react'
import { BookShelf } from './BookShelf';
export const ListBook = ({books,onChangeShelfBook}) => {
  const currentlyReading = books.filter((book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead"
  );
  const read = books.filter((book) => book.shelf === "read"
  );
  return (
    <div className="list-books-content">
    <div>
      <BookShelf books={currentlyReading} title="Currently Reading" onChangeShelfBook = {onChangeShelfBook} />
      <BookShelf books={wantToRead} title="Want to Read" onChangeShelfBook = {onChangeShelfBook} />
      <BookShelf books={read} title="Read" onChangeShelfBook = {onChangeShelfBook} />
    </div>
  </div>
  )
}
