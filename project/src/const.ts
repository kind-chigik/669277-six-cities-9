export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favotites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const LAYER_MAP_URL = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
export const LAYER_MAP_COPYRIGHT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export enum ClassMap {
  Cities = 'cities__map',
  Property = 'property__map',
}

export enum Action {
  ChangeCity = 'main/changeCity',
  ChangeOffers = 'main/changeOffers',
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const INITIAL_CITY = {
  title: 'Paris',
  lat: 48.8534,
  lng: 2.3488,
  zoom: 10,
};

