import {Hotel} from '../types/hotel';
import {City} from '../types/city';
import {OfferForMap} from '../types/hotel';
import {UserReview} from '../types/user-review';
import {citiesForMap, INITIAL_CITY, SortType} from '../const';

export function getRatingStars(rating: number, isCard?: boolean): string {
  if (isCard) {
    return `${Math.round(rating) * 20}%`;
  }
  return `${rating * 20}%`;
}

export function getActiveOffer(offers: Hotel[], id: number): OfferForMap | null {
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

export function comparePriceLowToHigh(element1: Hotel, element2: Hotel): number {
  const result = element1.price - element2.price;
  return result;
}

export function comparePriceHighToLow(element1: Hotel, element2: Hotel): number {
  const result = element2.price - element1.price;
  return result;
}

export function compareRating(element1: Hotel, element2: Hotel): number {
  const result = element2.rating - element1.rating;
  return result;
}

export function compareCity(element1: Hotel, element2: Hotel): number {
  if (element1.city.name < element2.city.name) {
    return -1;
  }
  if (element1.city.name > element2.city.name) {
    return 1;
  }
  return 0;
}

export function compareDate(element1: UserReview, element2: UserReview): number {
  if (element1.date > element2.date) {
    return -1;
  }
  if (element1.date < element2.date) {
    return 1;
  }
  return 0;
}

export function getSortedOffersForCity(offers: Hotel[], type: string): Hotel[] {
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

export function getSortedFavoriteItems(offers: Hotel[]) {
  return offers.sort(compareCity);
}

export function getSortedReviews(reviews: UserReview[]) {
  const reviewsCopy = [...reviews];

  const result = reviewsCopy.sort(compareDate);
  return result;
}
