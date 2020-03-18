import { handleActions } from 'redux-actions';
import { CLIENT_SET_VALUE } from './actions';

export const defaultState = {
  count: 0,
};

export default (parentWindowState) => {
  let initState;

  if (parentWindowState){
    initState = {...parentWindowState }
  } else {
    initState = defaultState;
  }

  return handleActions({
    [CLIENT_SET_VALUE]: (state, action) => ({
      ...state,
      ...action.payload,
    })
  }, initState);

}
