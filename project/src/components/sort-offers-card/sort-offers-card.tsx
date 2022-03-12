import {SortType} from '../../const';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeOffersSort} from '../../store/action';

function SortOfferCard(): JSX.Element {
  const [isListSortOpened, setIsListSortOpened] = useState(false);
  const dispatch = useAppDispatch();
  const activeSortType = useAppSelector((state) => state.offerSort);
  const SortTypes = Object.values(SortType);

  const clickSortListHandler = () => {
    setIsListSortOpened(!isListSortOpened);
  };

  const clickSortTypeHandler = (sortType: string) => {
    dispatch(changeOffersSort(sortType));
    setIsListSortOpened(!isListSortOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={clickSortListHandler}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isListSortOpened && 'places__options--opened'}`}>
        {SortTypes.map((sortType) => <li key={sortType} className={`places__option ${(activeSortType === sortType) && 'places__option--active'}`} tabIndex={0} onClick={() => clickSortTypeHandler(sortType)} >{sortType}</li>)}
      </ul>
    </form>
  );
}

export default SortOfferCard;
