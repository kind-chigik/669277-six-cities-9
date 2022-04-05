import {requireAuthorization, userProcess} from './user-process';
import {AuthorizationStatus} from '../../const';

describe('Reducer: userProcess', () => {
  it('Should return initial state without additional parameters', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'})).toEqual({authorizationStatus: AuthorizationStatus.Unknown});
  });

  it('Should update authorizationStatus to "AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth};

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.Auth))).toEqual({authorizationStatus: AuthorizationStatus.Auth});
  });

  it('Should update authorizationStatus to "NO_AUTH"', () => {
    const state = {authorizationStatus: AuthorizationStatus.NoAuth};

    expect(userProcess.reducer(state, requireAuthorization(AuthorizationStatus.NoAuth))).toEqual({authorizationStatus: AuthorizationStatus.NoAuth});
  });
});
