import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/const';

const initialState = {
  offers: [],
  offer: {},
  isDataLoaded: false,
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
      state.isDataLoaded = true;
    },
  },
});

export const { loadOffers, loadOffer, setDataLoad } = appData.actions;
