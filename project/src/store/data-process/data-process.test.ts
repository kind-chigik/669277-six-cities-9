import {dataProcess, loadOffers, loadComments, loadNearbyOffers} from './data-process';
import {offers} from '../../utils/offers-mocks';
import {comments} from '../../utils/comments-mocks';
import {INITIAL_STATE_MOCK} from '../../const';

describe('Reducer: dataProcess', () => {
  it('should return initial state without additional parameters', () => {
    expect(dataProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'})).toEqual({offers: [], comments: [], nearbyOffers: [], isDataLoaded: false, isCommentsLoaded: true});
  });

  it('should update offers by load offers', () => {
    const state = {
      offers: [],
      comments: [],
      nearbyOffers: [],
      isDataLoaded: false,
      isCommentsLoaded: true,
    };

    expect(dataProcess.reducer(state, loadOffers(offers))).toEqual(
      {
        offers,
        comments: [],
        nearbyOffers: [],
        isDataLoaded: true,
        isCommentsLoaded: true,
      });
  });

  it('should update comments by load comments', () => {
    expect(dataProcess.reducer(INITIAL_STATE_MOCK, loadComments(comments))).toEqual({
      offers: [],
      comments,
      nearbyOffers: [],
      isDataLoaded: true,
      isCommentsLoaded: true,
    });
  });

  it('should update nearbyOffers by load nearbyOffers', () => {
    const nearbyOffers = offers;

    expect(dataProcess.reducer(INITIAL_STATE_MOCK, loadNearbyOffers(nearbyOffers))).toEqual(
      {
        offers: [],
        comments: [],
        nearbyOffers,
        isDataLoaded: true,
        isCommentsLoaded: true,
      });
  });
});

