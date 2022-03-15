import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffers, changeOffersSort, loadOffers} from './actions';
import {offers} from '../mocks/offers';
import {INITIAL_CITY, SortType} from '../const';

const initialCities = offers.filter((offer) => offer.city.name === 'Paris');

const initialState = {
  city: INITIAL_CITY.title,
  offerList: initialCities,
  offerSort: SortType.Popular,
  offers: [],
  isDataLoaded: false,
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    });
});

export {reducer};
