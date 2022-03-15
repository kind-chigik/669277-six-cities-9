import {createAsyncThunk} from '@reduxjs/toolkit';
import {Action, APIRoute} from '../const';
import {api, store} from '../store';
import {loadOffers} from './actions';

export const fetchOffersAction = createAsyncThunk(Action.FetchOffers, async () => {
  const {data} = await api.get(APIRoute.hotels);
  store.dispatch(loadOffers(data));
});

