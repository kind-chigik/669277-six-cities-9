import OfferCard from '../offer-card/offer-card';
import {Hotel} from '../../types/hotel';

type OffersProps = {
  offers: Hotel[];
  activeOfferHandler?: (id: number) => void;
}

function OfferList({offers, activeOfferHandler}: OffersProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={`${offer.id} ${offer.title}`} offer = {offer} activeOfferHandler = {activeOfferHandler} />)}
    </div>
  );
}

export default OfferList;
