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

export enum APIRoute {
  Hotels = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/',
  Nearby = '/nearby',
}

export enum HTTP_CODE {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
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
  ChangeOffersSort = 'main/changeOffersSort',
  LoadOffers = 'data/loadOffers',
  FetchOffers = 'data/fetchOffers',
  FetchComments = 'data/fetchComments',
  LoadComments = 'data/loadComments',
  FetchNearbyOffers = 'data/fetchNearbyOffers',
  LoadNearbyOffers = 'data/loadNearbyOffers',
  RequireAuthorization = 'user/requireAuthorization',
  CheckAuth = 'user/checkAuth',
  Login = 'user/login',
  Logout = 'user/logout',
  AddComment = 'data/addComment',
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const INITIAL_CITY = {
  title: 'Paris',
  lat: 48.8534,
  lng: 2.3488,
  zoom: 10,
};

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

