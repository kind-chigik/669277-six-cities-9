import {Process} from '../../const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: State): string => state[Process.User].authorizationStatus;
