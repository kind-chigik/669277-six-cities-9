import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import NotFound from '../not-found/not-found';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppSelector} from '../../hooks';

function App(): JSX.Element {
  const {offers, isDataLoaded}= useAppSelector(({DATA})=> DATA);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<Main offers = {offers} />}></Route>
        <Route path={AppRoute.Login} element={<Login />}></Route>
        <Route path={AppRoute.Favotites} element={
          <PrivateRoute><Favorites offers = {offers}/></PrivateRoute>
        }
        >
        </Route>
        <Route path={AppRoute.Offer} element={<Offer offers = {offers} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
