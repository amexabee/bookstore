import * as actions from '../actions';

const reducer = (state = [], action) => {
  switch (action.type) {
    case actions.STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
};

export default reducer;

export const statusChecked = () => ({
  type: actions.STATUS_CHECKED,
});
