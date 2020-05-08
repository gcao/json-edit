import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    clearPath: (state: any) => {
      state.pathUnderMouse = null;
    },
    setPath: (state: any, action: PayloadAction<any>) => {
      state.pathUnderMouse = action.payload;
    },
    updateJson: (state: any, action: PayloadAction<any>) => {
      state.rawData = action.payload;
      state.data = JSON.parse(action.payload);
    },
    updatePropName: (state: any, action: PayloadAction<any>) => {
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
  updatePropName,
} = slice.actions;

export default slice.reducer;