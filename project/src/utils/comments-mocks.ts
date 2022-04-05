import {UserReview} from '../types/user-review';

export const comments: UserReview[] = [
  {
    comment: 'Однозначно ставлю 5. Всё отлично:сервис приятный, завтраки разнообразные, шампанское с утра бесподобно.',
    date: '20 марта 2022',
    id: 1,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-1.jpg',
      id: 11,
      isPro: true,
      name: 'Алена',
    },
  },
  {
    comment: 'Отель замечательный! Номер хороший. Нет, конечно, евроремонта. Но чисто, уютно, всё необходимое имеется. ',
    date: '22 марта 2022',
    id: 2,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-2.jpg',
      id: 12,
      isPro: false,
      name: 'Марина',
    },
  },
  {
    comment: 'Отдыхали в отеле в марте 2022. Сначала похвалю службу, ответственную за услуги прачечной (бесплатно), быстро, вежливо, качественно.',
    date: '25 марта 2022',
    id: 3,
    rating: 5,
    user: {
      avatarUrl: 'img/avatar-3.jpg',
      id: 13,
      isPro: false,
      name: 'Наташа',
    },
  },
];
