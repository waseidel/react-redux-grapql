import { createSelector } from "reselect";

const selectCasos = (state) => state.casos;

export const makeSelectCasos = createSelector(
  selectCasos,
  (casos) => casos.casos
);
