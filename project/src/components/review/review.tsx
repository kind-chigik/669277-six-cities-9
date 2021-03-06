import {UserReview} from '../../types/user-review';
import {getRatingStars} from '../../utils/utils';
import moment from 'moment';

type reviewsProps = {
  review: UserReview;
}

function Review ({review}: reviewsProps): JSX.Element {
  const {user, comment, rating, date} = review;
  const {name, avatarUrl} = user;
  const starsRating = getRatingStars(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: starsRating}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={moment(date).format('MMMM YYYY')}>{moment(date).format('MMMM YYYY')}</time>
      </div>
    </li>
  );
}

export default Review;
