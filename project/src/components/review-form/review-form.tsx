import {useState, ChangeEvent, FormEvent, Fragment} from 'react';
import {addCommentAction} from '../../store/api-actions';
import {changeStatusLoad} from '../../store/data-process/data-process';
import {getStatusLoadComments} from '../../store/data-process/selectors';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {ratingStars, LimitComment} from '../../const';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [textReview, setTextReview] = useState('');
  const statusLoadComments = useAppSelector(getStatusLoadComments);
  const dispatch = useAppDispatch();
  const isReviewCorrect = textReview.length > LimitComment.MinLength && textReview.length < LimitComment.MaxLength && rating > LimitComment.MinRating;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isReviewCorrect) {
      dispatch(changeStatusLoad(false));
      dispatch(addCommentAction({comment: textReview, rating: rating, id: offerId, clearText: setTextReview, clearRating: setRating}));
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <fieldset style={{border: 'none'}} disabled={!statusLoadComments}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingStars.map((ratingStar) => (
            <Fragment key={ratingStar.id}>
              <input className="form__rating-input visually-hidden" name="rating" id={ratingStar.id} type="radio" onChange={() => setRating(ratingStar.value)} value={rating} checked={rating === ratingStar.value} />
              <label htmlFor={ratingStar.id} className="reviews__rating-label form__rating-label" title={ratingStar.title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => setTextReview(evt.target.value)} value={textReview}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled={!isReviewCorrect}>Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default ReviewForm;
