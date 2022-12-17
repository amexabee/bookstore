import React from 'react';
import ListBooks from './ListBooks';
import AddBook from './AddBook';

const BookContainer = () => (
  <div className="container p-5">
    <ListBooks />
    <AddBook />
  </div>
);

export default BookContainer;
