import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Action, APIRoute, AuthorizationStatus, STATUS_LOAD_ERROR} from '../const';
import {loadOffers, loadComments, loadNearbyOffers, changeStatusLoad} from './data-process/data-process';
import {requireAuthorization} from './user-process/user-process';
import {saveUserLogin} from './app-process/app-process';
import {AuthData} from '../types/auth-data';
import {UserComment} from '../types/user-comment';
import {saveToken, dropToken} from '../services/token';
import {errorHandle} from '../services/error-handle';
import {HotelFavorite} from '../types/hotel';
import {State, AppDispatch} from '../types/state';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.FetchOffers, async (_arg, {dispatch, extra: api}) => {
  const {data} = await api.get(APIRoute.Hotels);
  dispatch(loadOffers(data));
});

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.FetchComments, async (id, {dispatch, extra: api}) => {
  try {
    const {data} = await api.get(`${APIRoute.Comments}${id}`);
    dispatch(loadComments(data));
  } catch(error) {
    errorHandle(error);
  }
});

export const fetchNearbyOffersAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.FetchNearbyOffers, async (id, {dispatch, extra: api}) => {
  const {data} = await api.get(`${APIRoute.Hotels}/${id}${APIRoute.Nearby}`);
  dispatch(loadNearbyOffers(data));
});

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.CheckAuth, async (_arg, {dispatch, extra: api}) => {
  try {
    const {data} = await api.get(APIRoute.Login);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(saveUserLogin(data.email));
  } catch(error) {
    errorHandle(error);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.Login, async ({email, password}, {dispatch, extra: api}) => {
  try {
    const {data: {token}} = await api.post(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  } catch(error) {
    errorHandle(error);
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
});

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.Logout, async (_arg, { dispatch, extra: api}) => {
  try {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  } catch(error) {
    errorHandle(error);
  }
});

export const addCommentAction = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.AddComment, async ({comment, rating, id, clearText, clearRating}, {dispatch, extra: api}) => {
  try {
    await api.post(`${APIRoute.Comments}${id}`, {comment, rating});
    dispatch(fetchCommentsAction(id));
    clearText('');
    clearRating(0);
  } catch(error) {
    errorHandle(error);
    dispatch(changeStatusLoad(STATUS_LOAD_ERROR));
  }
});

export const changeFavorite = createAsyncThunk<void, HotelFavorite, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(Action.ChangeFavorite, async ({id, status, offerRendersCard}, {dispatch, extra: api}) => {
  try {
    await api.post(`${APIRoute.Favorite}/${id}/${status}`, {status});
    const {data} = await api.get(APIRoute.Hotels);
    dispatch(loadOffers(data));
    if (offerRendersCard) {
      dispatch(fetchNearbyOffersAction(offerRendersCard));
    }
  } catch(error) {
    errorHandle(error);
  }
});
