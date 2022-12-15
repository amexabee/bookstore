import { combineReducers } from 'redux';
import bookReducer from './books/books';
import catagoriesReducer from './catagories/categories';

const rootReducer = combineReducers({ bookReducer, catagoriesReducer });

const createStore = (reducer) => {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners.filter((l) => l !== listener);
    };
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};

export default createStore(rootReducer);
