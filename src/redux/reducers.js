import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://api.coinstats.app/public/v1/coins';

const coinStatsData = (arr) => arr.map((item) => ({
  ...item,
  volume: Number(item.volume).toFixed(3),
  availableSupply: Number(item.availableSupply).toFixed(3),
  totalSupply: Number(item.totalSupply).toFixed(3),
  priceChange1h: Number(item.priceChange1h).toFixed(3),
  priceChange1d: Number(item.priceChange1d).toFixed(3),
  priceChange1w: Number(item.priceChange1w).toFixed(3),
}));

export const fetchCoins = createAsyncThunk('coins/getCryptos', async () => {
  const response = await fetch(BASE_URL);
  const { coins } = await response.json();
  return coinStatsData(coins);
});

const coinSlice = createSlice({
  name: 'coins',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoins.fulfilled, (state, action) => [...state, ...action.payload]);
  },
});

export const { actions, reducer: coinReducer } = coinSlice;
