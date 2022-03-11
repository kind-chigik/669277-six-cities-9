import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity, changeOffers} from '../../store/action';
import {Hotel} from '../../types/hotel';

type CitiesListProps = {
  cities: string[];
  offers: Hotel[];
}

function CitiesList({cities, offers}: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city);
  const isCityChecked = (city: string) => city === activeCity ? 'tabs__item--active' : '';

  const clickHandler = (city: string, hotels: Hotel[]) => {
    const offersForCity = hotels.filter((hotel) => hotel.city.name === city);
    dispatch(changeCity(city));
    dispatch(changeOffers(offersForCity));
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li key={`city item ${city}`} className="locations__item" onClick={() => {clickHandler(city, offers);}}>
          <Link className={`locations__item-link tabs__item ${isCityChecked(city)}`} to="#">
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
