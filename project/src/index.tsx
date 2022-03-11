import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import {offers} from './mocks/offers';

const Settings = {
  OFFERS_COUNT: 5,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersCount = {Settings.OFFERS_COUNT} offers = {offers} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

