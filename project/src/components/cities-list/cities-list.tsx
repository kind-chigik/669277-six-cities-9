import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/app-process/app-process';
import {getActiveCity} from '../../store/app-process/selectors';
import {Hotel} from '../../types/hotel';
import {memo} from 'react';

type CitiesListProps = {
  cities: string[];
  offers: Hotel[];
}

function CitiesList({cities, offers}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getActiveCity);
  const isCityChecked = (city: string) => city === activeCity ? 'tabs__item--active' : '';

  const handleCityClick = (city: string, hotels: Hotel[]) => {
    dispatch(changeCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={`city item ${city}`} className="locations__item" onClick={() => {handleCityClick(city, offers);}}>
          <Link className={`locations__item-link tabs__item ${isCityChecked(city)}`} to="#">
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default memo(CitiesList);
