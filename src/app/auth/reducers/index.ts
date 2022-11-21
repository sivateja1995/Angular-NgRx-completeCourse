import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { environment } from "../../../environments/environment";
import { authenticationActions } from "../authentication-types";
import { User } from "../model/user.model";

export const authFeatureKey = "auth";

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined,
};

// export const reducers: ActionReducerMap<AuthState> = {};

export const Authreducer = createReducer(
  initialAuthState,
  on(authenticationActions.login, (state, action) => {
    console.log("calling the ");
    return {
      ...state,
      user: action.user,
    };
  })
);
