import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './catagories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  categoriesReducer,
});

const createStore = configureStore({
  reducer: rootReducer,
});

export default createStore;
