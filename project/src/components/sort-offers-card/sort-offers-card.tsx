import {useState, memo} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeOffersSort} from '../../store/app-process/app-process';
import {getOfferSort} from '../../store/app-process/selectors';
import {SortType} from '../../const';

function SortOfferCard(): JSX.Element {
  const [isListSortOpened, setIsListSortOpened] = useState(false);
  const dispatch = useAppDispatch();
  const offerSort = useAppSelector(getOfferSort);
  const sortTypes = Object.values(SortType);

  const handleSortListClick = () => {
    setIsListSortOpened(!isListSortOpened);
  };

  const handleSortTypeClick = (sortType: string) => {
    dispatch(changeOffersSort(sortType));
    setIsListSortOpened(!isListSortOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortListClick}>
        {offerSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isListSortOpened && 'places__options--opened'}`}>
        {sortTypes.map((sortType) => <li key={sortType} className={`places__option ${(offerSort === sortType) && 'places__option--active'}`} tabIndex={0} onClick={() => handleSortTypeClick(sortType)} >{sortType}</li>)}
      </ul>
    </form>
  );
}

export default memo(SortOfferCard);
