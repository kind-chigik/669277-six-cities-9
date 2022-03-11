import { Hotel } from './types/hotel';
import {citiesForMap} from './mocks/cities';
import {City} from './types/city';
import {INITIAL_CITY} from './const';

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

export function getCityForMap(city: string): City {
  let cityForMap = INITIAL_CITY;
  citiesForMap.forEach((element) => {
    if (element.title === city) {
      cityForMap = element;
    }
  });
  return cityForMap;
}
