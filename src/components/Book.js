/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { title, author } = props;
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
          <button type="button" className="btn shadow-none">
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
