import {createAsyncThunk} from '@reduxjs/toolkit';
import {Action, APIRoute, AuthorizationStatus} from '../const';
import {api, store} from '../store';
import {loadOffers, requireAuthorization} from './actions';
import {AuthData} from '../types/auth-data';
import {saveToken, dropToken} from '../services/token';
import {errorHandle} from '../services/error-handle';

export const fetchOffersAction = createAsyncThunk(Action.FetchOffers, async () => {
  const {data} = await api.get(APIRoute.Hotels);
  store.dispatch(loadOffers(data));
});

export const checkAuthAction = createAsyncThunk(Action.CheckAuth, async () => {
  try {
    await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch(error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk(Action.Login, async ({email, password}: AuthData) => {
  try {
    const {data: {token}} = await api.post(APIRoute.Login, {email, password});
    saveToken(token);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch(error) {
    errorHandle(error);
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk(Action.Logout, async () => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } catch(error) {
    errorHandle(error);
  }
});
