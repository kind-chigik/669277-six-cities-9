import SortOfferCard from '../sort-offers-card/sort-offers-card';
import OfferList from '../offer-list/offer-list';
import Map from '../map/map';
import MainEmpty from '../main-empty/main-empty';
import {Hotel, OfferForMap} from '../../types/hotel';
import {getCityForMap} from '../../utils/utils';
import {ClassMap, OFFERS_COUNT} from '../../const';

type OffersCityProps = {
  sortedOffersForActiveCity: Hotel[];
  activeOfferHandler?: (id: number) => void;
  activeOffer: OfferForMap | null;
  activeCity: string;
}

function OffersCity({sortedOffersForActiveCity, activeOfferHandler, activeOffer, activeCity}: OffersCityProps) {
  if (sortedOffersForActiveCity.length === OFFERS_COUNT) {
    return <MainEmpty />;
  }

  const cityForMap = getCityForMap(activeCity);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{sortedOffersForActiveCity.length} places to stay in {activeCity}</b>
          <SortOfferCard />
          <OfferList offers = {sortedOffersForActiveCity} activeOfferHandler = {activeOfferHandler}/>
        </section>
        <div className="cities__right-section">
          <Map offers={sortedOffersForActiveCity} activeOffer={activeOffer} city={cityForMap} classMap={ClassMap.Cities} />
        </div>
      </div>
    </div>
  );
}

export default OffersCity;
