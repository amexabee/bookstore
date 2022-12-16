import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { bookAdded } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  // const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAdded(uuidv4(), title, author));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h5>ADD NEW BOOK</h5>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Book title"
              value={title}
              onInput={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              value={author}
              onInput={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary">
              Add Book
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBook;
