import OfferCard from '../offer-card/offer-card';
import {Hotel} from '../../types/hotel';
import {useState} from 'react';

type OffersProps = {
  offers: Hotel[];
}

function OfferList({offers}: OffersProps) {
  const [, setActiveOffer] = useState(0);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <OfferCard key={offer.id} offer = {offer} activeOfferHandler = {setActiveOffer} />)}
    </div>
  );
}

export default OfferList;
