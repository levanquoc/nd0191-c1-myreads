import React, { useState } from 'react'

export const BookShelfChanger = ({book,onChangeShelfBook}) => {
  const [shelf,setShelf] = useState(book.shelf);
  console.log(shelf);
  const handleChange =(e) =>{
    console.log(e.target.value);
    setShelf(e.target.value);
    onChangeShelfBook(book,e.target.value);
  }
  return (
    <div className="book-shelf-changer">
    <select value={shelf} onChange={handleChange}>
        <option  disabled>
        Move to...
        </option>
        <option value="currentlyReading">
        Currently Reading
        </option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
    </div>
  );
};
