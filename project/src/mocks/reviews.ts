import {UserReview} from '../types/user-review';

export const reviews: UserReview[] = [
  {
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: 'Mon Feb 28 2022 16:39:56 GMT+0300 (Москва, стандартное время)',
    id: 1,
    rating: 4,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: false,
      name: 'Oliver',
    },
  },
  {
    comment: 'I liked everything. Clean cozy room with a nice view.',
    date: 'Mon Feb 26 2022 16:39:56 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Oliviya',
    },
  },
  {
    comment: 'The room have everything you need. Very tasty breakfast.',
    date: 'Mon Feb 25 2022 16:39:56 GMT+0300 (Москва, стандартное время)',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Din',
    },
  },
];
