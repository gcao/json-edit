import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ConfigState {
}

const initialState: ConfigState = {
};

export const STATE_KEY = "config";

export const slice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    test(state: any, action: PayloadAction<any>) {
    },
  },
});

export const {
  test,
} = slice.actions;

// export const selectOrientation = (state: RootState) => state[STATE_KEY].orientation;

export default slice.reducer;
