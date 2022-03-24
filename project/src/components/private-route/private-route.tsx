import {AuthorizationStatus, AppRoute} from '../../const';
import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus} = useAppSelector(({USER})=> USER);

  return (
    authorizationStatus === AuthorizationStatus.Auth ? props.children : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
