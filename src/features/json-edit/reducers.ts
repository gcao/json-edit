import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JsonEditState {
    pathUnderMouse: any,
}

const initialState: JsonEditState = {
  pathUnderMouse: null,
};

export const STATE_KEY = "jsonEdit";

export const jsonEditSlice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    clearPath: (state: any) => {
      state.pathUnderMouse = null;
    },
    setPath: (state: any, action: PayloadAction<any>) => {
      state.pathUnderMouse = action.payload.pathUnderMouse;
    },
    updateJson: (state: any, action: PayloadAction<any>) => {
      state.rawData = action.payload.json;
      state.data = JSON.parse(action.payload.json);
    },
  },
});

export const { clearPath, setPath, updateJson } = jsonEditSlice.actions;

export default jsonEditSlice.reducer;
