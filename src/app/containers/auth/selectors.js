import { createSelector } from "reselect";

const selectAuth = (state) => state;

export const makeSelectLogin = createSelector(selectAuth, (auth) => auth.user);
export const makeSelectToken = createSelector(selectAuth, (auth) => auth.token);
