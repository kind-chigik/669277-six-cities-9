import NotFound from './not-found';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from '../../store';

describe('Component NotFound', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <BrowserRouter><NotFound /></BrowserRouter>
      </Provider>);

    const h1Element = screen.getByText('404 Not Found');
    const linkElement = screen.getByText('Go to the main page');

    expect(h1Element).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
