import FavoritesItem from '../favorites-item/favorites-item';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Header from '../header/header';
import Footer from '../footer/footer';
import {Hotel} from '../../types/hotel';
import {getSortedFavoriteItems} from '../../utils/utils';
import {OFFERS_COUNT} from '../../const';

type OfferProps = {
  offers: Hotel[];
}

function Favorites({offers}: OfferProps): JSX.Element {
  const favoriteItems = offers.filter((offer) => offer.isFavorite);
  if (favoriteItems.length === OFFERS_COUNT) {
    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <FavoritesEmpty />
        </main>
        <Footer />
      </div>
    );
  }

  const sortedFavoriteItems = getSortedFavoriteItems(favoriteItems);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {sortedFavoriteItems.map((offer) => <FavoritesItem key={offer.id} offer = {offer} />)}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
