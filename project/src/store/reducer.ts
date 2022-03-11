import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffers} from './action';
import {offers} from '../mocks/offers';
import {INITIAL_CITY} from '../const';

const initialCities = offers.filter((offer) => offer.city.name === 'Paris');

const initialState = {
  city: INITIAL_CITY.title,
  offerList: initialCities,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  })
    .addCase(changeOffers, (state, action) => {
      state.offerList = action.payload;
    });
});

export {reducer};
