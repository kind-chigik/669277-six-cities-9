import OfferCard from '../offer-card/offer-card';
import ReviewForm from '../review-form/review-form';
import Header from '../header/header';
import Review from '../review/review';
import {AuthorizationStatus} from '../../const';
import {Hotel} from '../../types/hotel';
import {useParams} from 'react-router-dom';
import {reviews} from '../../mocks/reviews';

type OfferProps = {
  offers: Hotel[];
}

function Offer({offers}: OfferProps): JSX.Element {
  const offerId = useParams();
  const offer = offers.filter((element) => element.id === Number(offerId.id));
  const {images, isPremium, title, type, bedrooms, maxAdults, price, goods, host, description} = offer[0];
  const {name, isPro, avatarUrl} = host;
  const isOfferPremium = isPremium ? <div className="property__mark"><span>Premium</span></div> : '';
  const isHostPro = isPro ? <span className="property__user-status">Pro</span> : '';

  return (
    <div className="page">
      <Header authorizationStatus={AuthorizationStatus.NoAuth} />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                images.map((image: string) => (
                  <div key={image} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>
                ))
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isOfferPremium}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">4.8</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
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
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isHostPro}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ul className="reviews__list">
                  <Review review = {reviews[0]} />
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferCard offer = {offers[0]} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
