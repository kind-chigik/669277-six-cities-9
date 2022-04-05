import Review from '../review/review';
import {UserReview} from '../../types/user-review';
import {getSortedReviews} from '../../utils/utils';

type reviewListProps = {
  reviews: UserReview[];
}

function ReviewList({reviews}: reviewListProps): JSX.Element {
  let sortedReviews = reviews;
  if (reviews.length !== 0) {
    sortedReviews = getSortedReviews(reviews);
  }

  return (
    <ul className="reviews__list">
      {sortedReviews.map((review, i) => {
        if (i < 10) {
          return (
            <Review key={`${review.id} ${review.user.name}`} review = {review} />
          );}
      })}
    </ul>
  );
}

export default ReviewList;

