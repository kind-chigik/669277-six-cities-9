import { Hotel } from './types/hotel';

export function getActiveOffer(offers: Hotel[], id: number) {
  const activeOffer = offers.find((offer) => offer.id === id);

  if (activeOffer) {
    const offerForMap = {
      city: activeOffer.city.name,
      lat: activeOffer.location.latitude,
      lng: activeOffer.location.longitude,
      zoom: activeOffer.location.zoom,
      id: activeOffer.id,
    };
    return offerForMap;
  }
  return null;
}
