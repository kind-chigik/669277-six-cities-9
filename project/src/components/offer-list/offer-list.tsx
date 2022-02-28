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
      <OfferCard offer = {offers[0]} activeOfferHandler = {setActiveOffer} />
      <OfferCard offer = {offers[1]} activeOfferHandler = {setActiveOffer} />
      <OfferCard offer = {offers[2]} activeOfferHandler = {setActiveOffer} />
    </div>
  );
}

export default OfferList;
