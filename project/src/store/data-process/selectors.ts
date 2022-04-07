import {Process} from '../../const';
import {State} from '../../types/state';
import {Hotel} from '../../types/hotel';
import {UserReview} from '../../types/user-review';

export const getOffers = (state: State): Hotel[] => state[Process.Data].offers;
export const getComments = (state: State): UserReview[] => state[Process.Data].comments;
export const getNearbyOffers = (state: State): Hotel[] => state[Process.Data].nearbyOffers;
export const getStatusLoadData = (state: State): boolean => state[Process.Data].isDataLoaded;
export const getStatusLoadComments = (state: State): boolean | string => state[Process.Data].statusLoadComments;
