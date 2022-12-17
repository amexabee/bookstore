import { createAsyncThunk } from '@reduxjs/toolkit';
import * as actions from '../actions';

export const posted = createAsyncThunk(actions.BOOK_ADDED, async (book) => {
  await fetch(actions.URL, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
});

export const deleted = createAsyncThunk(
  actions.BOOK_REMOVED,
  async (itemId) => {
    await fetch(`${actions.URL}/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  },
);

export const got = createAsyncThunk(actions.GET_BOOK, async () => {
  const response = await fetch(actions.URL);
  const data = await response.json();
  return data;
});
