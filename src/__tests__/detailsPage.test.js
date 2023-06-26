import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import DetailsPage from '../components/DetailsPage';

const mockStore = configureStore([]);

describe('DetailsPage', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      coins: [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          price: 50000,
          marketCap: 1000000000,
          volume: 500000,
          availableSupply: 1000000,
          totalSupply: 2000000,
          priceChange1h: 1.5,
          priceChange1d: 2.5,
          priceChange1w: 3.5,
          icon: 'bitcoin.png',
          twitter: 'bitcoin',
        },
      ],
    });
  });

  test('renders details of a coin', () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/coins/bitcoin']}>
          <Routes>
            <Route path="/coins/:coinId" element={<DetailsPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Back to List')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText('$50,000.00')).toBeInTheDocument();
    expect(screen.getByText('$1,000,000,000.00')).toBeInTheDocument();
    expect(screen.getByText('$500,000.00')).toBeInTheDocument();
    expect(screen.getByText('Price Change (1h)')).toBeInTheDocument();
    expect(screen.getByText('1.5%')).toBeInTheDocument();
    expect(screen.getByText('Price Change (1d)')).toBeInTheDocument();
    expect(screen.getByText('2.5%')).toBeInTheDocument();
    expect(screen.getByText('Price Change (1w)')).toBeInTheDocument();
    expect(screen.getByText('3.5%')).toBeInTheDocument();

    expect(screen.getByTestId('twitter-link')).toHaveAttribute(
      'href',
      'https://twitter.com/bitcoin',
    );
    expect(screen.getByTestId('info-link')).toHaveAttribute(
      'href',
      'https://www.cryptocompare.com/coins/bitcoin/overview',
    );
    expect(screen.getByTestId('coingecko-link')).toHaveAttribute(
      'href',
      'https://www.coingecko.com/en/coins/bitcoin',
    );
  });
});
