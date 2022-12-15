import * as actions from '../actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.BOOK_ADDED:
      return [
        ...state,
        { id: action.id, title: action.title, author: action.author },
      ];
    case actions.BOOK_REMOVED:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;

export const bookAdded = (id, title, author) => ({
  type: actions.BOOK_ADDED,
  id,
  title,
  author,
});

export const bookRemoved = (id) => ({
  type: actions.BOOK_REMOVED,
  id,
});
