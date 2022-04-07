import {Hotel} from '../../types/hotel';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AuthorizationStatus, AppRoute} from '../../const';
import {useNavigate} from 'react-router-dom';
import {changeFavorite} from '../../store/api-actions';
import {getRatingStars, transformFirstLetter} from '../../utils/utils';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type OfferCardProps = {
  offer: Hotel;
  activeOfferHandler?: (id: number) => void;
  currentOfferId?: number;
}

function OfferCard({offer, activeOfferHandler, currentOfferId}: OfferCardProps): JSX.Element {
  const {id, price, title, type, previewImage, isPremium, isFavorite, rating} = offer;
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const starsRating = getRatingStars(rating, true);
  const convertedType = transformFirstLetter(type);
  const isBookmarkActive = authorizationStatus === AuthorizationStatus.Auth ? isFavorite : false;

  const mouseEnterHandler = () => {
    if (activeOfferHandler) {
      activeOfferHandler(id);
    }
  };

  const handleBookmarkClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      return navigate(AppRoute.Login);
    }
    const status = Number(!isFavorite);
    dispatch(changeFavorite({id: id, status: status, offerRendersCard: currentOfferId}));
  };

  return (
    <article className="cities__place-card place-card" onMouseEnter = {mouseEnterHandler}>
      {isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${isBookmarkActive && 'place-card__bookmark-button--active'}`} type="button" onClick={handleBookmarkClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{convertedType}</p>
      </div>
    </article>
  );
}

export default OfferCard;
