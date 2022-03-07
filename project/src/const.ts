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

export const LAYER_MAP_URL = 'https://service.pdok.nl/brt/achtergrondkaart/wmts/v2_0/water/EPSG:3857/{z}/{x}/{y}.png';
export const LAYER_MAP_COPYRIGHT = 'Kaartgegevens &copy; <a href="https://www.kadaster.nl">Kadaster</a>';


