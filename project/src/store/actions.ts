import {createAction} from '@reduxjs/toolkit';
import {Action} from '../const';

export const changeCity = createAction(Action.ChangeCity, (value) => (
  {
    type: Action.ChangeCity,
    payload: value,
  }
));

export const changeOffers = createAction(Action.ChangeOffers, (value) => (
  {
    type: Action.ChangeOffers,
    payload: value,
  }
));

export const changeOffersSort = createAction(Action.ChangeOffersSort, (value) => (
  {
    type: Action.ChangeOffersSort,
    payload: value,
  }
));

export const loadOffers = createAction(Action.LoadOffers, (value) => (
  {
    type: Action.LoadOffers,
    payload: value,
  }
));

export const loadComments = createAction(Action.LoadComments, (value) => (
  {
    type: Action.LoadComments,
    payload: value,
  }
));

export const loadNearbyOffers = createAction(Action.LoadNearbyOffers, (value) => (
  {
    type: Action.LoadNearbyOffers,
    payload: value,
  }
));

export const requireAuthorization = createAction(Action.RequireAuthorization, (value) => (
  {
    type: Action.RequireAuthorization,
    payload: value,
  }
));
