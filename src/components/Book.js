/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { bookRemoved } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { id, title, author } = props;

  const handleDelete = () => {
    dispatch(bookRemoved(id));
  };

  return (
    <div className="bg-light mb-5">
      <div className="p-3">
        <h4>{title}</h4>
        <h6>{author}</h6>
      </div>

      <div className="p-1">
        <span>
          <button type="button" className="btn shadow-none">
            Comments
          </button>
          |
        </span>
        <span>
          <button
            onClick={() => handleDelete()}
            type="button"
            className="btn shadow-none"
          >
            Remove
          </button>
          |
        </span>
        <span>
          <button type="button" className="btn shadow-none">
            Edit
          </button>
        </span>
      </div>
    </div>
  );
};

export default Book;
