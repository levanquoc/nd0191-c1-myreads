import "./App.css";
import { useState,useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { SearchBook } from "./component/SearchBook";
import { Routes, Route, Link } from "react-router-dom";
import { ListBook } from "./component/ListBook";

function App() {
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
      <Routes>
        <Route path="/" element={<ListBook books={books} onChangeShelfBook={onChangeShelfBook} />} />
        <Route path="/search" element={<SearchBook onChangeShelfBook={onChangeShelfBook} books={books} />} />
      </Routes>
      <div className="open-search">
        <Link to="/search" className="add-book">
          Add a book
        </Link>
      </div>
    </div>
  );
}

export default App;
