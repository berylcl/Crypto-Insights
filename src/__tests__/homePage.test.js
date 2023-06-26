import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Homepage from '../components/HomePage';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Homepage', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
  });

  it('renders coins correctly', async () => {
    const mockCoins = [
      {
        id: 'coin1', name: 'Coin 1', symbol: 'C1', icon: 'coin1.png',
      },
      {
        id: 'coin2', name: 'Coin 2', symbol: 'C2', icon: 'coin2.png',
      },
    ];

    useSelector.mockReturnValueOnce(mockCoins);

    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByTestId('homepage')).toBeInTheDocument();
    });

    mockCoins.forEach((coin) => {
      expect(screen.getByText(coin.name)).toBeInTheDocument();
      expect(screen.getByText(coin.symbol)).toBeInTheDocument();
      expect(screen.getByAltText(coin.name)).toBeInTheDocument();
    });
  });

  it('dispatches fetchCoins when coinState is empty', () => {
    useSelector.mockReturnValueOnce([]);
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>,
    );

    expect(useDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});
