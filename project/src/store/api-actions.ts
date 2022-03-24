import {createAsyncThunk} from '@reduxjs/toolkit';
import {Action, APIRoute, AuthorizationStatus} from '../const';
import {api, store} from '../store';
import {loadOffers, loadComments, loadNearbyOffers} from './data-process/data-process';
import {requireAuthorization} from './user-process/user-process';
import { saveUserLogin } from './app-process/app-process';
import {AuthData} from '../types/auth-data';
import {UserComment} from '../types/user-comment';
import {saveToken, dropToken} from '../services/token';
import {errorHandle} from '../services/error-handle';

export const fetchOffersAction = createAsyncThunk(Action.FetchOffers, async () => {
  const {data} = await api.get(APIRoute.Hotels);
  store.dispatch(loadOffers(data));
});

export const fetchCommentsAction = createAsyncThunk(Action.FetchComments, async (id: number) => {
  const {data} = await api.get(`${APIRoute.Comments}${id}`);
  store.dispatch(loadComments(data));
});

export const fetchNearbyOffersAction = createAsyncThunk(Action.FetchNearbyOffers, async (id: number) => {
  const {data} = await api.get(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
  store.dispatch(loadNearbyOffers(data));
});

export const checkAuthAction = createAsyncThunk(Action.CheckAuth, async () => {
  try {
    const {data} = await api.get(APIRoute.Login);
    store.dispatch(requireAuthorization(AuthorizationStatus.Auth));
    store.dispatch(saveUserLogin(data.email));
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

export const addCommentAction = createAsyncThunk(Action.AddComment, async ({comment, rating, id}: UserComment) => {
  try {
    await api.post(`${APIRoute.Comments}${id}`, {comment, rating});
    store.dispatch(fetchCommentsAction(id));
  } catch(error) {
    errorHandle(error);
  }
});
