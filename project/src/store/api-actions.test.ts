import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {createAPI} from '../services/api';
import {State} from '../types/state';
import {Action} from 'redux';
import {APIRoute} from '../const';
import {checkAuthAction} from '../store/api-actions';
import {requireAuthorization} from '../store/user-process/user-process';
import {offers} from '../utils/offers-mocks';
import {comments} from '../utils/comments-mocks';
import {fetchOffersAction, fetchCommentsAction, fetchNearbyOffersAction, addCommentAction, loginAction, logoutAction, changeFavorite} from '../store/api-actions';
import {loadOffers, loadComments, loadNearbyOffers} from '../store/data-process/data-process';
import {saveUserLogin} from '../store/app-process/app-process';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('authorization status should be «auth» when server return 200', async () => {    // Тест checkAuthAction
    const store = mockStore();
    mockAPI.onGet(APIRoute.Login).reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(requireAuthorization.toString());
  });

  it('Login should be save when server return 200 and GET /login', async () => {    // Тест checkAuthAction на сохранение логина
    const mockLogin = 'aaaa@mail.ru';
    const store = mockStore();

    mockAPI.onGet(APIRoute.Login).reply(200, mockLogin);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(saveUserLogin.toString());
  });

  it('should dispatch loadOffers when GET /hotels', async () => {         // Тест fetchOffersAction
    const store = mockStore();

    mockAPI.onGet(APIRoute.Hotels).reply(200, offers);

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadOffers.toString());
  });

  it('should dispatch loadComments when GET /comments/id', async () => {    // Тест fetchCommentsAction
    const mockId = 1000;
    const store = mockStore();

    mockAPI.onGet(`${APIRoute.Comments}${mockId}`).reply(200, comments);

    await store.dispatch(fetchCommentsAction(mockId));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadComments.toString());
  });

  it('should dispatch fetchCommentsAction when POST /comments/id', async () => {    // Тест addCommentAction
    const comment = 'Однозначно ставлю 5. Всё отлично:сервис приятный, завтраки разнообразные.';
    const rating = 10;
    const id = 1110;

    const store = mockStore();

    mockAPI.onPost(`${APIRoute.Comments}${id}`, {comment, rating}).reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(addCommentAction({comment, rating, id}));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain('data/fetchComments/pending');
  });

  it('should dispatch loadNearbyOffers when GET /hotels/id/nearby', async () => {       // Тест fetchNearbyOffersAction
    const mockId = 1100;
    mockAPI.onGet(`${APIRoute.Hotels}/${mockId}${APIRoute.Nearby}`).reply(200, offers);

    const store = mockStore();

    await store.dispatch(fetchNearbyOffersAction(mockId));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadNearbyOffers.toString());
  });

  it('should dispatch RequriedAuthorization POST /login', async () => {        // Тест  loginAction
    const fakeUser = {email: 'test@test.ru', password: '123456'};
    const store = mockStore();

    mockAPI.onPost(APIRoute.Login).reply(200, {token: 'secret'});
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('six-cities-token', 'secret');
  });

  it('should dispatch Logout when Delete /logout', async () => {        // Тест  logoutAction
    const store = mockStore();

    mockAPI.onDelete(APIRoute.Logout).reply(204);
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(requireAuthorization.toString());

    expect(Storage.prototype.removeItem).toBeCalledTimes(1);
    expect(Storage.prototype.removeItem).toBeCalledWith('six-cities-token');
  });

  it('should dispatch loadOffers when POST /favorite/id/status', async () => {        // Тест  changeFavorite
    const status = 3;
    const id = 3000;
    const store = mockStore();

    mockAPI.onPost(`${APIRoute.Favorite}/${id}/${status}`, {status}).reply(200, []);
    expect(store.getActions()).toEqual([]);

    await store.dispatch(changeFavorite({id, status}));

    const actions = store.getActions().map(({type}) => type);
    expect(actions).toContain(loadOffers.toString());
  });
});
