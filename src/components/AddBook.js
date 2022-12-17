import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { posted } from '../redux/books/api';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      posted({
        title,
        author,
        category,
        item_id: uuidv4(),
      }),
    );
    setTitle('');
    setAuthor('');
    setCategories('');
  };

  return (
    <>
      <hr className="line" />
      <h5 style={{ color: 'gray' }}>ADD NEW BOOK</h5>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              className="form-control"
              placeholder="Book title"
              value={title}
              onInput={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              value={author}
              onInput={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="col-3">
            <select
              className="form-select"
              name="list"
              onChange={(e) => {
                setCategories(e.target.value);
              }}
              required
            >
              <option defaultValue="">Category</option>
              <option value="Science Fiction">Science Fiction</option>
              <option value="Fiction">Fiction</option>
              <option value="Biography">Biography</option>
              <option value="History">History</option>
              <option value="Political">Political</option>
              <option value="Action">Action</option>
              <option value="Economy">Economy</option>
              <option value="Spiritual">Spiritual</option>
            </select>
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
