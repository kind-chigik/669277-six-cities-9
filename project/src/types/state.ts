import {store} from '../store';
import {AuthorizationStatus, SortType} from '../const';
import {Hotel} from './hotel';
import {UserReview} from './user-review';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type AppProcess = {
  activeCity: string;
  offerSort: SortType.Popular;
  userLogin: string;
};

export type DataProcess = {
  offers: Hotel[],
  comments: UserReview[],
  nearbyOffers: Hotel[],
  isDataLoaded: boolean,
  isCommentsLoaded: boolean,
};

