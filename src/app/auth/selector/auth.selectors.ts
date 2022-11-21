import { createSelector } from "@ngrx/store";


// memorized function : it keeps the memory of the previous executions

// logedin selector
export const isLoggedIn = createSelector(
  (state) => state["auth"],
  (auth) => !!auth.user
);


// logged out selector
export const isLoggedOut= createSelector(
  (state)=>state["auth"],
  (auth) => !auth.user
)
