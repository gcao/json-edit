import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../../app/store';

interface EditPopupState {
  editing: boolean,
}

const initialState: EditPopupState = {
  editing: false,
};

export const STATE_KEY = "editPopup";

export const slice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    show(state) {
      state.editing = true;
    },
    hide(state) {
      state.editing = false;
    },
  },
});

export const { show, hide } = slice.actions;

export const selectEditing = (state: RootState) => state[STATE_KEY].editing;

export default slice.reducer;
