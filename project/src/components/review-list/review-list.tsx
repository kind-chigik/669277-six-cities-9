import Review from '../review/review';
import {UserReview} from '../../types/user-review';

type reviewListProps = {
  reviews: UserReview[];
}

function ReviewList({reviews}: reviewListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (<Review key={`${review.id} ${review.user.name}`} review = {review} />
      ))}
    </ul>
  );
}

export default ReviewList;

