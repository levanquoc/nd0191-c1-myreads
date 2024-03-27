import "./App.css";
import { useState,useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { SearchBook } from "./component/SearchBook";
import {Link} from "react-router-dom";
import { ListBook } from "./component/ListBook";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([]);
  useEffect(() => {
		const getBooks = async () => {
			const response = await BooksAPI.getAll();
			if (response.error) {
				console.log("Error");
			}
      console.log(response);
      setBooks(response);
		};
		getBooks();
	}, []);

  const onChangeShelfBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === "none") {
      setBooks(books.filter((b) => b.id !== book.id));
    } else {
      const existingBookIndex = books.findIndex((b) => b.id === book.id);
      if (existingBookIndex !== -1) {
        const updatedBooks = [...books];
        updatedBooks[existingBookIndex].shelf = shelf;
        setBooks(updatedBooks);
      } else {
        setBooks([...books, { ...book, shelf }]);
      }
    }
  };


  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBook />
      ) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
          <ListBook books={books} onChangeShelfBook={onChangeShelfBook} />
          </div>
          <div className="open-search">
            {/* <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a> */}
            <Link to="/search" className="add-book">Add a book</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
