import {AuthorizationStatus, AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  return (
    props.authorizationStatus === AuthorizationStatus.Auth ? props.children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
