import * as actions from '../actions';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case actions.BOOK_ADDED_FULFILLED:
      return [...state, action.meta.arg];
    case actions.BOOK_REMOVED_FULFILLED:
      return state.filter((book) => book.item_id !== action.meta.arg);
    case actions.GET_BOOK_FULFILLED:
      return Object.keys(action.payload).map((key) => {
        const { title, author, category } = action.payload[key][0];
        return {
          item_id: key,
          title,
          author,
          category,
        };
      });
    default:
      return state;
  }
};

export default booksReducer;

export const addBook = (book) => ({
  type: actions.BOOK_ADDED,
  book,
});

export const removeBook = (book) => ({
  type: actions.BOOK_REMOVED,
  book,
});
