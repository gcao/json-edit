import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as R from 'ramda';

import EditPopup from './edit-popup';
import { updateData, selectPathUnderMouse } from './slice';
import { useGetDataByPath } from './utils';

export default function JsonEditPopup() {
  let pathUnderMouse = useSelector(selectPathUnderMouse);
  if (R.isEmpty(pathUnderMouse)) {
    // return null;
  }

  let data = useGetDataByPath(pathUnderMouse);

  // Limitation: editing complex data is not supported
  if (R.is(Array, data) || R.is(Object, data)) {
    // return null;
  }

  const dispatch = useDispatch();

  const saveHandler = () => {
    dispatch(updateData(""));
  }

  return (
    <EditPopup onSave={saveHandler}>
      <div className="field">
        <label className="label">New Value:</label>
        <div className="control">
          <input className="input is-primary" type="text" placeholder={data} />
        </div>
      </div>
    </EditPopup>
  );
}
