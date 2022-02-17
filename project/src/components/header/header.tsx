import HeaderAuthorization from '../header-authorization/header-authorization';
import {Link} from 'react-router-dom';

type LoginProps = {
  authorizationStatus?: string;
  isPageLogin?: boolean;
}

function Header(props: LoginProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to='/'>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <HeaderAuthorization isPageLogin={props.isPageLogin} authorizationStatus={props.authorizationStatus}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
