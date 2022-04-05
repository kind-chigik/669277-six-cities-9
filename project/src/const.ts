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
  Favorite = '/favorite',
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
  ChangeFavorite = 'data/changeFavorite',
  AddComment = 'data/addComment',
  RequireAuthorization = 'user/requireAuthorization',
  CheckAuth = 'user/checkAuth',
  Login = 'user/login',
  Logout = 'user/logout',
  SaveUserLogin = 'user/saveUserLogin',
}

export enum Process {
  User = 'USER',
  Data = 'DATA',
  App = 'APP',
}

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const citiesForMap = [
  {
    title: 'Paris',
    lat: 48.8534,
    lng: 2.3488,
    zoom: 10,
  },
  {
    title: 'Cologne',
    lat: 50.938361,
    lng: 6.959974,
    zoom: 10,
  },
  {
    title: 'Brussels',
    lat: 50.8504,
    lng: 4.34878,
    zoom: 10,
  },
  {
    title: 'Amsterdam',
    lat: 52.374,
    lng: 4.88969,
    zoom: 10,
  },
  {
    title: 'Hamburg',
    lat: 53.5753,
    lng: 10.0153,
    zoom: 10,
  },
  {
    title: 'Dusseldorf',
    lat: 51.2217,
    lng: 6.77616,
    zoom: 10,
  },
];

export const INITIAL_CITY = {
  title: 'Paris',
  lat: 48.8534,
  lng: 2.3488,
  zoom: 10,
};

export const INITIAL_STATE_MOCK = {
  offers: [],
  comments: [],
  nearbyOffers: [],
  isDataLoaded: true,
  isCommentsLoaded: true,
};

export enum SortType {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const ratingStars = [
  {
    id: '5-stars',
    value: 5,
    title: 'perfect',
  },
  {
    id: '4-stars',
    value: 4,
    title: 'good',
  },
  {
    id: '3-stars',
    value: 3,
    title: 'not bad',
  },
  {
    id: '2-stars',
    value: 2,
    title: 'badly',
  },
  {
    id: '1-stars',
    value: 1,
    title: 'terribly',
  },
];

export const OFFERS_COUNT = 0;
export const MAX_COMMENTS = 10;

export enum LimitComment {
  MaxLength = 300,
  MinLength = 50,
  MinRating = 0,
}
