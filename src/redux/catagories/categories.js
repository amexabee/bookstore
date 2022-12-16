import * as actions from '../actions';

const catagoriesReducer = (state = [], action) => {
  switch (action.type) {
    case actions.STATUS_CHECKED:
      return 'Under Construction';
    default:
      return state;
  }
};

export default catagoriesReducer;

export const statusChecked = () => ({
  type: actions.STATUS_CHECKED,
});
