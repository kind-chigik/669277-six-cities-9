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

