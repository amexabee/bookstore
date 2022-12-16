import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const ListBooks = () => {
  const list = useSelector((state) => state.bookReducer);
  return (
    <>
      {list.map((book) => (
        <Book
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
        />
      ))}
    </>
  );
};

export default ListBooks;
