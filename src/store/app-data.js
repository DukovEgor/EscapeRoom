import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/const';

const initialState = {
  offers: [],
  offer: {},
};

export const appData = createSlice({
  name: NameSpace.data,
  initialState,
  reducers: {
    loadOffers: (state, action) => {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    loadOffer: (state, action) => {
      state.offer = action.payload;
    },
  },
});

export const { loadOffers, loadOffer } = appData.actions;
