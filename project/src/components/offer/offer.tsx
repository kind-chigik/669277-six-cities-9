import OfferCard from '../offer-card/offer-card';
import ReviewForm from '../review-form/review-form';
import Header from '../header/header';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import NotFound from '../not-found/not-found';
import {Hotel} from '../../types/hotel';
import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {getActiveOffer, getCityForMap, getRatingStars, transformFirstLetter} from '../../utils/utils';
import {ClassMap, AuthorizationStatus, AppRoute, OFFERS_COUNT, MAX_COMMENTS} from '../../const';
import {fetchCommentsAction, fetchNearbyOffersAction, changeFavorite} from '../../store/api-actions';
import {getActiveCity} from '../../store/app-process/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getNearbyOffers, getComments} from '../../store/data-process/selectors';

type OfferProps = {
  offers: Hotel[];
}

let offersForMap: Hotel[] = [];

function Offer({offers}: OfferProps): JSX.Element {
  const offerId = useParams();
  const currentOfferId = Number(offerId.id);

  const activeCity = useAppSelector(getActiveCity);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const comments = useAppSelector(getComments);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (offer.length !== OFFERS_COUNT) {
      dispatch(fetchCommentsAction(currentOfferId));
      dispatch(fetchNearbyOffersAction(currentOfferId));
    }
  }, [currentOfferId]);

  const offer = offers.filter((element) => element.id === currentOfferId);
  if (offer.length === OFFERS_COUNT) {
    return <NotFound />;
  }

  const currentOffer = offer[0];
  const {id, images, isPremium, isFavorite, title, type, bedrooms, maxAdults, price, goods, host, description, rating} = currentOffer;
  const {name, isPro, avatarUrl} = host;

  const activeOffer = getActiveOffer(offers, id);
  offersForMap = [...nearbyOffers];
  offersForMap.push(currentOffer);

  const cityForMap = getCityForMap(activeCity);
  const convertedType = transformFirstLetter(type);
  const isUserAuth = authorizationStatus === AuthorizationStatus.Auth;
  const starsRating = getRatingStars(rating);
  const commentsCount = comments.length < MAX_COMMENTS ? comments.length : MAX_COMMENTS;
  const isBookmarkActive = authorizationStatus === AuthorizationStatus.Auth ? isFavorite : false;

  const handleBookmarkClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      return navigate(AppRoute.Login);
    }
    const status = Number(!isFavorite);
    dispatch(changeFavorite({id: currentOfferId, status: status}));
  };

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.slice(0, 6).map((image: string) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))
              }

            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isBookmarkActive && 'property__bookmark-button--active'}`} type="button" onClick={handleBookmarkClick}>
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: starsRating}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {convertedType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    goods.map((good) => (
                      <li key={good} className="property__inside-item">
                        {good}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper user__avatar-wrapper ${isPro && 'property__avatar-wrapper--pro'}`}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro && <span className="property__user-status">Pro</span>}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{commentsCount}</span></h2>
                <ReviewList reviews={comments} />
                {isUserAuth && <ReviewForm offerId={currentOffer.id}/>}
              </section>
            </div>
          </div>
          <Map offers={offersForMap} activeOffer={activeOffer} city={cityForMap} classMap={ClassMap.Property}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearOffer) => <OfferCard key={nearOffer.id} offer={nearOffer} currentOfferId={currentOffer.id} />)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
