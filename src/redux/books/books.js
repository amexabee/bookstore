import * as actions from '../actions';

const bookReducer = (
  state = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ],
  action,
) => {
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

export default bookReducer;

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
