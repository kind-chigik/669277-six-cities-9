import {useState, ChangeEvent, FormEvent} from 'react';
import {addCommentAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';

type ReviewFormProps = {
  offerId: number;
}

function ReviewForm({offerId}: ReviewFormProps): JSX.Element {
  const [rating, setRating] = useState(0);
  const [textReview, setTextReview] = useState('');
  const [isCommentsLoaded, setIsCommentsLoaded] = useState(false);
  // eslint-disable-next-line no-console
  console.log(rating, isCommentsLoaded);
  const dispatch = useAppDispatch();
  const isReviewCorrect = textReview.length > 50 && textReview.length < 300 && rating > 0;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isReviewCorrect) {
      dispatch(addCommentAction({comment: textReview, rating: rating, id: offerId}));
      setIsCommentsLoaded(true);
      setTextReview('');
      setRating(0);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <fieldset style={{border: 'none'}} disabled={isCommentsLoaded}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          <input className="form__rating-input visually-hidden" name="rating" id="5-stars" type="radio" onChange={() => setRating(5)} value={rating}  />
          <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" id="4-stars" type="radio" onChange={() => setRating(4)} value={rating} />
          <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" id="3-stars" type="radio" onChange={() => setRating(3)} value={rating} />
          <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" id="2-stars" type="radio" onChange={() => setRating(2)} value={rating} />
          <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>

          <input className="form__rating-input visually-hidden" name="rating" id="1-star" type="radio" onChange={() => setRating(1)} value={rating} />
          <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
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
