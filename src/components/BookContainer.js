import React from 'react';
import ListBooks from './ListBooks';
import AddBook from './AddBook';

const BookContainer = () => {
  const addBookItem = () => {};

  return (
    <div className="container p-5">
      <ListBooks />
      <AddBook addBookProps={addBookItem} />
    </div>
  );
};

export default BookContainer;
