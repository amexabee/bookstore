import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecked } from '../redux/catagories/categories';

const Catagories = () => {
  const dispatch = useDispatch();
  const response = useSelector((state) => state.catagoriesReducer);

  const handleClick = () => {
    dispatch(statusChecked());
  };

  return (
    <>
      <div>
        <h2 style={{ textAlign: 'center', paddingTop: '20px' }}>{response}</h2>
      </div>
      <button
        onClick={() => handleClick()}
        type="button"
        className="btn btn-primary mt-4"
      >
        Check Status
      </button>
    </>
  );
};
export default Catagories;
