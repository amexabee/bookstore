import React from 'react';

const AddBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
              name="title"
              id="title"
            />
          </div>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              name="author"
              id="author"
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
