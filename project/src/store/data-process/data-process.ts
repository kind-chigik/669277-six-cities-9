import { createSlice } from '@reduxjs/toolkit';
import {Process} from '../../const';
import {DataProcess} from '../../types/state';

const initialState: DataProcess = {
  offers: [],
  comments: [],
  nearbyOffers: [],
  isDataLoaded: false,
  isCommentsLoaded: true,
};

export const dataProcess = createSlice({
  name: Process.Data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
      state.isCommentsLoaded = true;
    },
    changeStatusLoad: (state) => {
      state.isCommentsLoaded = false;
    },
    loadNearbyOffers: (state, action) => {
      state.nearbyOffers = action.payload;
    },
  },
});

export const {loadOffers, loadComments, loadNearbyOffers, changeStatusLoad} = dataProcess.actions;
