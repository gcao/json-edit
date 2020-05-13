import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditPopup from './edit-popup';
import { selectEditing } from './edit-popup/slice';
import { selectData, selectPathUnderMouse, updateData } from './slice';

export default function JsonEditPopup() {
  const dispatch = useDispatch();
  let editing = useSelector(selectEditing);
  let data = useSelector(selectData);
  let pathUnderMouse = useSelector(selectPathUnderMouse);
  let input: any;
  useEffect(() => {
    if (input) {
      input.focus();
    }
  });

  if (!editing) {
    return null;
  }

  let dataToEdit = pathUnderMouse?.search(data);
  const saveHandler = () => {
    dispatch(updateData({ path: pathUnderMouse, value: input.value }));
  }

  return (
    <EditPopup onSave={saveHandler}>
      <div className="field">
        <label className="label">New Value:</label>
        <div className="control">
          <input className="input" type="text" defaultValue={dataToEdit}
            ref={node => input = node} />
        </div>
      </div>
    </EditPopup>
  );
}
