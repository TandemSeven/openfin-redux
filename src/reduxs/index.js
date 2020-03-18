import { combineReducers } from 'redux';

// Redux
import client from './client/reducer';
export * from './client/actions';

export default (parentWindowState) => {
  return parentWindowState
    ? combineReducers({ client: client(parentWindowState.client) })
    : combineReducers({ client: client() });
}
