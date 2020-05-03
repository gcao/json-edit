import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import JsonPath from 'src/json-path';

interface JsonEditState {
    pathUnderMouse: any,
}

const initialState: JsonEditState = {
  pathUnderMouse: new JsonPath(),
};

export const jsonEditSlice = createSlice({
  name: 'jsonEdit',
  initialState,
  reducers: {
    updateJson: (state: any, action: PayloadAction<any>) => {
      state.rawData = action.payload.json;
      state.data = JSON.parse(action.payload.json);
    },
  },
});

export const { updateJson } = jsonEditSlice.actions;

export const pathUnderMouseSel = (state: RootState) => state.jsonEdit.pathUnderMouse;

export default jsonEditSlice.reducer;
