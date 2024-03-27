import React from 'react'
import { Book } from './Book'
export const BookShelf = ({books,title,onChangeShelfBook}) => {
  return (
    <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book)=> {
                      return <Book key={book.id} book={book}  onChangeShelfBook={onChangeShelfBook} />
                    })}
                  </ol>
                </div>
              </div>
  )
}
