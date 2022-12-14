/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleted } from '../redux/books/api';

const colBlue = { fontSize: '0.875rem', fontWeight: 300, color: '#4386bf' };
const colGray = { color: 'lightgray' };
const chapterStyle = { color: 'lightgray', fontSize: '14px' };

const Book = ({ BOOK }) => {
  const dispatch = useDispatch();
  const {
    title, author, item_id, category,
  } = BOOK;

  const handleDelete = () => {
    dispatch(deleted(item_id));
  };

  return (
    <div className="bg-white mb-3 py-4 px-5 border d-flex justify-content-between">
      <div className="d-flex flex-column align-content-center">
        <div className="mb-2">
          <h6 className="m-0 p-0" style={colGray}>
            {category}
          </h6>
          <h4 className="m-0 p-0">{title}</h4>
          <h6 className="mt-1 p-0" style={colBlue}>
            {author}
          </h6>
        </div>

        <div style={colGray}>
          <button
            style={colBlue}
            type="button"
            className="btn ps-0 shadow-none"
          >
            Comments
          </button>
          |
          <button
            onClick={() => handleDelete()}
            type="button"
            style={colBlue}
            className="btn shadow-none"
          >
            Remove
          </button>
          |
          <button style={colBlue} type="button" className="btn shadow-none">
            Edit
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="circular-progress" />
        <div className="mx-3">
          <h3 className="my-0">64%</h3>
          <h6 style={colGray}>Completed</h6>
        </div>
      </div>
      <div>
        <div>
          <p className="mb-0" style={chapterStyle}>
            CURRENT CHAPTER
          </p>
          <p className="mt-0">Chapter 17</p>
        </div>
        <button type="button" className="btn btn-primary">
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default Book;
