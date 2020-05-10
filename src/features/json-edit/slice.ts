import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';

interface JsonEditState {
  rawData: string,
  pathUnderMouse: any,
}

const initialState: JsonEditState = {
  rawData: "{}",
  pathUnderMouse: null,
};

export const STATE_KEY = "jsonEdit";

export const slice = createSlice({
  name: STATE_KEY,
  initialState,
  reducers: {
    clearPath(state: any) {
      state.pathUnderMouse = null;
    },
    setPath(state: any, action: PayloadAction<any>) {
      state.pathUnderMouse = action.payload;
    },
    updateJson(state: any, action: PayloadAction<any>) {
      state.rawData = action.payload;
      state.data = JSON.parse(action.payload);
    },
    updateData(state: any, action: PayloadAction<any>) {
      // TODO
      // path = action.path;
      // value = action.value;
      // // TODO make a copy instead of change in place to support undo/redo
      // current = state.data;
      // path.parts.slice(0, path.size() - 1).forEach(part => {
      //     current = current[part];
      // });
      // current[path.parts[path.size() - 1]] = value;
      // return Object.assign({}, state, {
      //     rawData: JSON.stringify(state.data, null, 4),
      //     data: state.data
      // });
    },
    updatePropName(state: any, action: PayloadAction<any>) {
      // TODO
      // path = action.path;
      // var oldName = action.oldName;
      // var newName = action.newName;
      // // TODO make a copy instead of change in place to support undo/redo
      // current = path.findIn(state.data);
      // current[newName] = current[oldName];
      // delete current[oldName];
      // return Object.assign({}, state, {
      //     rawData: JSON.stringify(state.data, null, 4),
      //     data: state.data
      // });
    }
  },
});

export const {
  clearPath,
  setPath,
  updateJson,
  updateData,
  updatePropName,
} = slice.actions;

export const selectPathUnderMouse = (state: RootState) => state[STATE_KEY].pathUnderMouse;

export default slice.reducer;
