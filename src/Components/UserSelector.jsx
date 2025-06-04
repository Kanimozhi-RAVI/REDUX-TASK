import { createSelector } from 'reselect';

const selectUserState = (state) => state.user;

export const selectUsers = createSelector(
  [selectUserState],
  (user) => user.users
);

export const selectLoading = createSelector(
  [selectUserState],
  (user) => user.loading
);
