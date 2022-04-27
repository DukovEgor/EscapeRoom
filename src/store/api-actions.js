import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandle } from 'services/error-handle';
import { api } from 'store';
import { store } from 'store';
import { APIRoute } from 'utils/const';
import { loadOffer, loadOffers } from './app-data';

export const fetchOffersAction = createAsyncThunk(
  'data/fetchOffers',
  async () => {
    try {
      const { data } = await api.get(APIRoute.Offers);
      store.dispatch(loadOffers(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);

export const fetchOfferAction = createAsyncThunk(
  'data/fetchOffer',
  async (id) => {
    try {
      const { data } = await api.get(`${APIRoute.Offers}/${id}`);
      store.dispatch(loadOffer(data));
    } catch (error) {
      errorHandle(error);
    }
  },
);
