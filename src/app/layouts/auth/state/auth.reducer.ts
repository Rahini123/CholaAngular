/* NgRx */
import {
  createReducer,
  on,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AuthPageAction } from './actions';
import * as AppState from '../../../state/app.state';

export interface LoginState {
  userNameOrEmail: string;
  password: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  accessToken: string | null;
  currentUser: object | null;
  error: string | null;
}

export interface State extends AppState.State {
  login: LoginState;
  auth: AuthState;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isLoading: false,
  currentUser: null,
  accessToken: null,
  error: null,
};

const getAuthFeatureState = createFeatureSelector<AuthState>('auth');

export const selectAuthError = createSelector(
  getAuthFeatureState,
  (state) => state.error
);

export const selectUsername = createSelector(
  getAuthFeatureState,
  (state) => state.currentUser
);
export const selectIsLoading = createSelector(
  getAuthFeatureState,
  (state) => state.isLoading
);

export const authReducer = createReducer<AuthState>(
  initialState,
  on(
    AuthPageAction.checkAuthSuccess,
    AuthPageAction.checkAuthFailure,
    (state, { isAuthenticated }): AuthState => {
      return {
        ...state,
        isAuthenticated,
      };
    }
  ),
  on(AuthPageAction.loginSuccess, (state: AuthState, { accessToken }) => {
    return {
      ...state,
      accessToken,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    };
  }),
  on(AuthPageAction.getTokenSuccess, (state: AuthState, { accessToken }) => {
    return {
      ...state,
      accessToken,
    };
  }),
  on(AuthPageAction.loginFail, (state: AuthState, actions) => {
    return {
      ...state,
      error: actions.error,
      isAuthenticated: false,
      isLoading: false,
    };
  }),
  on(AuthPageAction.setUser, (state, actions) => {
    return {
      ...state,
      currentUser: actions,
    };
  }),
  on(AuthPageAction.startLogin, (state) => ({
    ...state,
    isLoading: true,
  }))
);
