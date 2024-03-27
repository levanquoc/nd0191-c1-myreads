import React from "react";
import { BookShelfChanger } from "./BookShelfChanger";

export const Book = ({ book, onChangeShelfBook }) => {
	return (
		<li key={book.id}>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`,
						}}
					/>
					<BookShelfChanger book={book} onChangeShelfBook={onChangeShelfBook} />
				</div>
				<div className='book-title'>{book.title ? book.title : ""}</div>
				<div className='book-authors'>{book.authors ? book.authors : ""}</div>
			</div>
		</li>
	);
};
