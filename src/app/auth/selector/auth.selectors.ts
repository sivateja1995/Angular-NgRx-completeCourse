import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers";


export const selectAuthState = createFeatureSelector<AuthState>("auth");

// memorized function : it keeps the memory of the previous executions

// logedin selector
export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);


// logged out selector
export const isLoggedOut= createSelector(
  isLoggedIn,
  loggedIn => !loggedIn
)
