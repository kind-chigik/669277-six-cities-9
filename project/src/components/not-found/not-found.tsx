import Header from '../header/header';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NotFound(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">404 Not Found</h1>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Root}>
                <span>Go to the main page</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
