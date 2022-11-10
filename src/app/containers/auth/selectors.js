import { createSelector } from "reselect";

const selectAuth = (state) => state.auth;

export const makeSelectUser = createSelector(selectAuth, (auth) => auth.user);
export const makeSelectToken = createSelector(selectAuth, (auth) => auth.token);
export const makeSelectIsLoading = createSelector(
  selectAuth,
  (auth) => auth.isLoading
);
