import {appProcess, changeCity, changeOffersSort, saveUserLogin} from './app-process';
import {INITIAL_CITY, SortType} from '../../const';
import {AppProcess} from '../../types/state';

describe('Reducer: appProcess', () => {
  it('should return initial state without additional parameters', () => {
    expect(appProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'})).toEqual(
      {
        activeCity: INITIAL_CITY.title,
        offerSort: SortType.Popular,
        userLogin: '',
      });
  });

  it('should update activeCity by a given value', () => {
    const activeCity = 'Ostin';
    const state: AppProcess = {
      activeCity: INITIAL_CITY.title,
      offerSort: SortType.Popular,
      userLogin: '',
    };

    expect(appProcess.reducer(state, changeCity(activeCity))).toEqual(
      {
        activeCity,
        offerSort: SortType.Popular,
        userLogin: '',
      });
  });

  it('should update offerSort by a given value', () => {
    const offerSort = 'Data: low to high';
    const state: AppProcess = {
      activeCity: INITIAL_CITY.title,
      offerSort: SortType.Popular,
      userLogin: '',
    };

    expect(appProcess.reducer(state, changeOffersSort(offerSort))).toEqual(
      {
        activeCity: INITIAL_CITY.title,
        offerSort,
        userLogin: '',
      });
  });

  it('should update userLogin by a given value', () => {
    const userLogin = 'chigik89@mail.ru';
    const state: AppProcess = {
      activeCity: INITIAL_CITY.title,
      offerSort: SortType.Popular,
      userLogin: '',
    };

    expect(appProcess.reducer(state, saveUserLogin(userLogin))).toEqual(
      {
        activeCity: INITIAL_CITY.title,
        offerSort: SortType.Popular,
        userLogin,
      });
  });
});
