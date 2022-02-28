import FavoritesItem from '../favorites-item/favorites-item';
import Header from '../header/header';
import Footer from '../footer/footer';
import {Hotel} from '../../types/hotel';

type OfferProps = {
  offers: Hotel[];
}

function Favorites({offers}: OfferProps): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesItem offer = {offers[0]} />
              <FavoritesItem offer = {offers[1]}/>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
