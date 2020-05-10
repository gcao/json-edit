import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

export enum LayoutOrientation {
  Vertical = 0,
  Horizontal = 1,
}

interface LayoutState {
  orientation: LayoutOrientation,
}

const initialState: LayoutState = {
  orientation: LayoutOrientation.Vertical,
};

export const STATE_KEY = "layout";

export const slice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    changeOrientation(state: any, action: PayloadAction<any>) {
    },
  },
});

export const {
  changeOrientation,
} = slice.actions;

export const selectOrientation = (state: RootState) => state[STATE_KEY].orientation;

export default slice.reducer;
