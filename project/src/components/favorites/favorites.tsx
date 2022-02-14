import FavoritesItem from '../favorites-item/favorites-item';

function Favorites(): JSX.Element {
  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          <FavoritesItem />
          <FavoritesItem />
        </ul>
      </section>
    </div>
  );
}

export default Favorites;
