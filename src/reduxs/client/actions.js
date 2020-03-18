import { createAction } from 'redux-actions';

// Update count
export const CLIENT_SET_VALUE = 'CLIENT_SET_VALUE';
export const clientSetValue = createAction(
    CLIENT_SET_VALUE,
        option => option
);
