import {createSlice} from '@reduxjs/toolkit';
import {INITIAL_CITY, SortType, Process} from '../../const';
import {AppProcess} from '../../types/state';

const initialState: AppProcess = {
  city: INITIAL_CITY.title,
  offerSort: SortType.Popular,
  userLogin: '',
};

export const appProcess = createSlice({
  name: Process.App,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeOffersSort: (state, action) => {
      state.offerSort = action.payload;
    },
    saveUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
  },
});

export const {changeCity, changeOffersSort, saveUserLogin} = appProcess.actions;
