import { useState ,useEffect} from 'react';
import {Link } from 'react-router-dom';
import * as BooksAPI from "../BooksAPI";
import { GetSearchBooks } from './GetSearchBooks';


export const SearchBook = ({onChangeShelfBook,books}) => {
  const [valueSearch,setValueSearch] = useState("");
  const [fetchedBooks,setFetchedBooks] = useState([]);
  useEffect(() => {
    const searchBooks = async () => {
      console.log("Start");
      try {
        console.log(valueSearch);
        if (valueSearch.length !== 0) {
          const searchedBooks = await BooksAPI.search(valueSearch);
          console.log(searchedBooks);
          setFetchedBooks(searchedBooks.error ? [] : searchedBooks);
        } else {
          setFetchedBooks([]);
        }
      } catch (error) {
        console.error("Error searching books:", error);
        setFetchedBooks([]);
      }
    };

    const timerID = setTimeout(searchBooks, 200);

    return () => {
      clearTimeout(timerID);
    };
  }, [valueSearch]);
  return (
  <div className="search-books">
    <div className="search-books-bar">     
      <Link to='/' className="close-search" >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={valueSearch}
          onChange={e=> setValueSearch(e.target.value)}
          placeholder="Search by title, author,c or ISBN"
        />
      </div>
    </div>
    <GetSearchBooks
					searchedBooks={books}
					fetchedBooks={fetchedBooks}
					onChangeShelfBook={onChangeShelfBook}
    />
  </div>
  )
}
