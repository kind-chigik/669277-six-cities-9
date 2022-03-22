import OfferList from '../offer-list/offer-list';
import SortOfferCard from '../sort-offers-card/sort-offers-card';
import Header from '../header/header';
import Map from '../map/map';
import CitiesList from '../cities-list/cities-list';
import {Hotel} from '../../types/hotel';
import {useState} from 'react';
import {getActiveOffer, getCityForMap, getSortedOffersForCity} from '../../utils';
import {ClassMap, CITIES} from '../../const';
import {useAppSelector} from '../../hooks';

type OfferProps = {
  offers: Hotel[];
}

function Main(props: OfferProps): JSX.Element {
  const [activeOfferId, setActiveOfferId] = useState(0);
  const activeOffer = getActiveOffer(props.offers, activeOfferId);
  const activeCity = useAppSelector(({APP}) => APP.city);
  const activeSortType = useAppSelector(({APP}) => APP.offerSort);
  const offersForActiveCity = props.offers.filter((offer) => offer.city.name === activeCity);
  const sortedOffersForActiveCity = getSortedOffersForCity(offersForActiveCity, activeSortType);

  const cityForMap = getCityForMap(activeCity);

  return (
    <>
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList cities={CITIES} offers={props.offers}/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersForActiveCity.length} places to stay in {activeCity}</b>
                <SortOfferCard />
                <OfferList offers = {sortedOffersForActiveCity} activeOfferHandler = {setActiveOfferId}/>
              </section>
              <div className="cities__right-section">
                <Map offers={offersForActiveCity} activeOffer={activeOffer} city={cityForMap} classMap={ClassMap.Cities} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main;
