import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import JPath from '../../jpath';
import { stringify } from './utils';

interface JsonEditState {
  rawData: string,
  data: any,
  pathUnderMouse?: JPath,
}

const initialState: JsonEditState = {
  rawData: "null",
  data: null,
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
      let { path, value } = action.payload;
      state.data = path.update(state.data, value);
      state.rawData = stringify(state.data);
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

export const selectData = (state: RootState) => state[STATE_KEY].data;
export const selectPathUnderMouse = (state: RootState) => state[STATE_KEY].pathUnderMouse;

export default slice.reducer;
