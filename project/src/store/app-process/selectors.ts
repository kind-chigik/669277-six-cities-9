import {Process} from '../../const';
import {State} from '../../types/state';

export const getActiveCity = (state: State): string => state[Process.App].activeCity;
export const getUserLogin = (state: State): string => state[Process.App].userLogin;
export const getOfferSort = (state: State): string => state[Process.App].offerSort;
