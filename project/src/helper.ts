import { Hotel } from './types/hotel';
import {citiesForMap} from './mocks/cities';
import {City} from './types/city';
import {INITIAL_CITY, SortType} from './const';

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

export function comparePriceLowToHigh(element1: Hotel, element2: Hotel) {
  const result = element1.price - element2.price;
  return result;
}

export function comparePriceHighToLow(element1: Hotel, element2: Hotel) {
  const result = element2.price - element1.price;
  return result;
}

export function compareRating(element1: Hotel, element2: Hotel) {
  const result = element2.rating - element1.rating;
  return result;
}

export function getSortedOffersForCity(offers: Hotel[], type: string) {
  const sourceOffers = offers;

  switch (type) {
    case SortType.Popular:
      return sourceOffers;
    case SortType.PriceLowToHigh:
      return offers.sort(comparePriceLowToHigh);
    case SortType.PriceHighToLow:
      return offers.sort(comparePriceHighToLow);
    case SortType.TopRatedFirst:
      return offers.sort(compareRating);
    default:
      return sourceOffers;
  }
}
