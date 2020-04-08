import { ADD_USER } from './user.types';

export const addUser = user => {
    return {
        type: ADD_USER,
        payload: user
    }
};
