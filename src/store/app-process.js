import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from 'utils/const';

const initialState = {
  activeLink: 'quests',
  activeTab: 'all',
};

export const appProcess = createSlice({
  name: NameSpace.process,
  initialState,
  reducers: {
    changeLink: (state, action) => {
      state.activeLink = action.payload;
    },
    changeTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { changeLink, changeTab } = appProcess.actions;
