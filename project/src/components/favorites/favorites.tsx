import FavoritesItem from '../favorites-item/favorites-item';
import Header from '../header/header';
import Footer from '../footer/footer';

function Favorites(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesItem />
              <FavoritesItem />
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
