import * as actions from '../actions';

export default reducer = (state = [], action) => {
  switch (action.type) {
    case actions.STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
};

export const statusChecked = () => ({
  type: actions.STATUS_CHECKED,
});
