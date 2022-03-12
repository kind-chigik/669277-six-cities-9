import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffers, changeOffersSort} from './action';
import {offers} from '../mocks/offers';
import {INITIAL_CITY, SortType} from '../const';

const initialCities = offers.filter((offer) => offer.city.name === 'Paris');

const initialState = {
  city: INITIAL_CITY.title,
  offerList: initialCities,
  offerSort: SortType.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  })
    .addCase(changeOffers, (state, action) => {
      state.offerList = action.payload;
    })
    .addCase(changeOffersSort, (state, action) => {
      state.offerSort = action.payload;
    });
});

export {reducer};
