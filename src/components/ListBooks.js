import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { got } from '../redux/books/api';
import Book from './Book';

const ListBooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(got());
  }, [dispatch]);

  const list = useSelector((state) => state.books, shallowEqual);

  return (
    <>
      {list.map((book) => (
        <Book key={book.item_id} BOOK={book} />
      ))}
    </>
  );
};

export default ListBooks;
