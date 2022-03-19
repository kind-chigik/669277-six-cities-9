import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeOffers, changeOffersSort, loadOffers, loadComments, loadNearbyOffers, requireAuthorization} from './actions';
import {offers} from '../mocks/offers';
import {INITIAL_CITY, SortType, AuthorizationStatus} from '../const';

const initialCities = offers.filter((offer) => offer.city.name === 'Paris');

const initialState = {
  city: INITIAL_CITY.title,
  offerList: initialCities,
  offerSort: SortType.Popular,
  offers: [],
  comments: [],
  nearbyOffers: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
