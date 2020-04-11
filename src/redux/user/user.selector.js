import { createSelector } from 'reselect';

export const selectUsers = state => state.users;

export const selectSpecificUser = user => {
    // const username = user.toString();
    return createSelector(
        [selectUsers],
        users => {
          return users.find(loopUser => loopUser.name.toLowerCase() === user.toLowerCase())
        }
      );
}