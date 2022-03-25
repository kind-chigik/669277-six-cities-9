import {Hotel} from '../../types/hotel';
import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks';
import {changeFavorite} from '../../store/api-actions';

type OfferProps = {
  offer: Hotel;
}

function FavoritesItem({offer}: OfferProps): JSX.Element {
  const {id, city, previewImage, price, type, isPremium, isFavorite} = offer;
  const {name} = city;
  const offerUrl = `/offer/${id}`;
  const dispatch = useAppDispatch();

  const bookmarkClickHandler = () => {
    const status = Number(!isFavorite);
    dispatch(changeFavorite({id: id, status: status}));
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={offerUrl}>
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          {isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <Link to={offerUrl}>
              <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
            </Link>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={bookmarkClickHandler}>
                <svg className="place-card__bookmark-icon" width="18" height="19">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <Link to={offerUrl}>Nice, cozy, warm big bed apartment</Link>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      </div>
    </li>
  );
}

export default FavoritesItem;
