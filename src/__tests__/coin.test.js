import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Coin from '../components/Coin';

describe('Coin', () => {
  const mockCoin = {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'bitcoin.png',
  };

  it('renders the coin correctly', () => {
    render(<Coin name={mockCoin.name} symbol={mockCoin.symbol} icon={mockCoin.icon} />);

    const coinElement = screen.getByTestId('coin');
    const iconElement = screen.getByRole('img');
    const nameElement = screen.getByText('Bitcoin');
    const symbolElement = screen.getByText('BTC');

    expect(coinElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute('src', 'bitcoin.png');
    expect(iconElement).toHaveAttribute('alt', 'Bitcoin');
    expect(nameElement).toBeInTheDocument();
    expect(symbolElement).toBeInTheDocument();
  });

  it('truncates long names and symbols', () => {
    const longName = 'Lorem Ipsum Dolor Sit Amet Consectetur';
    const longSymbol = 'ABCDEF';

    render(<Coin name={longName} symbol={longSymbol} icon="coin.png" />);

    const nameElement = screen.getByText(/Lorem Ipsum Dol/i);
    const symbolElement = screen.getByText('ABCDEF');

    expect(nameElement).toBeInTheDocument();
    expect(symbolElement).toBeInTheDocument();
  });
});
