import React from 'react';
import ListBooks from './ListBooks';
import AddBook from './AddBook';

const BookContainer = () => (
  <div className="p-5 book-cont">
    <ListBooks />
    <AddBook />
  </div>
);

export default BookContainer;
