import {Link} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

type LoginProps = {
  isPageLogin?: boolean;
}

function HeaderAuthorization(props: LoginProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();

  const logoutHandler = () => dispatch(logoutAction());

  if (props.isPageLogin) {
    return (
      <span></span>
    );
  }

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" to="#">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link className="header__nav-link" to="#" onClick={logoutHandler}>
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item">
          <Link className="header__nav-link" to="/login">
            <span className="header__signout">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderAuthorization;
