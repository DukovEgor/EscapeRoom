import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/const';

const initialState = {
  activeLink: 'quests',
};

export const appProcess = createSlice({
  name: NameSpace.process,
  initialState,
  reducers: {
    changeLink: (state, action) => {
      state.activeLink = action.payload;
    },
  },
});

export const { changeLink } = appProcess.actions;
