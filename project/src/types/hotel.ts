type City = {
  location: {
    latitude: number
    longitude: number
    zoom: number
  };
  name: string;
}

type Host = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Hotel = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type OfferForMap = {
  city: string;
  lat: number;
  lng: number;
  zoom: number;
  id: number;
}

export type HotelFavorite = {
  id: number;
  status: number;
  offerRendersCard?: number | undefined;
};
