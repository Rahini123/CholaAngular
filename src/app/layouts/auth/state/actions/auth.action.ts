import { LoginPayload } from './../../models/login';

/* NgRx */
import { createAction, props } from '@ngrx/store';

export const startLogin = createAction(
  '[Login Page] Start Login Process',
  props<{ login: LoginPayload }>()
);
export const loginSuccess = createAction(
  '[Login Api] Login Process Success',
  props<{ accessToken: string }>()
);
export const loginFail = createAction(
  '[Login Api] Login Process Failure',
  props<{ error: string }>()
);
export const startLogout = createAction('[Logout Action] Clear Token');
export const checkAuth = createAction('[Auth] Check Auth');
export const checkAuthSuccess = createAction(
  '[Auth] Check Auth Process Success',
  props<{ isAuthenticated: boolean }>()
);
export const checkAuthFailure = createAction(
  '[Auth] Check Auth Process Failure',
  props<{ isAuthenticated: boolean }>()
);

export const getToken = createAction('[Auth] Get Token');

export const getTokenSuccess = createAction(
  '[Auth] Get Token Process Success',
  props<{ accessToken: string }>()
);
export const getTokenFailure = createAction(
  '[Auth] Get Token Process Failure',
  props<{ error: string }>()
);

export const setUser = createAction(
  '[Auth Service] Set Current User',
  props<{ user: object }>()
);

export const justTestService = createAction('[Auth Service] just for testing');

export const getCommonReferenceObjects = createAction(
  '[Reference Service] Load Common Reference Object Service'
);
export const referenceServiceSuccess = createAction(
  '[Reference Service] service success'
);
export const referenceServiceFailure = createAction(
  '[Reference Service] service failure'
);



