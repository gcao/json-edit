import * as R from 'ramda';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { show } from './edit-popup/slice';
import { selectPathUnderMouse, setPath } from './slice';
import { createMouseOverHandler } from './utils';

export default function LiteralPresenter(props: any) {
  const dispatch = useDispatch();
  let pathUnderMouse = useSelector(selectPathUnderMouse);

  const { data, path } = props;

  const editInPopup = () => {
    dispatch(setPath(path));
    dispatch(show());
  }

  if (R.is(Boolean, data)) {
    return (
      <div className="field">
        <input type="checkbox" className="switch is-rounded" checked={data}
          onChange={() => { }} />
        <label></label>
      </div>
    );
  } else if (data === null) {
    return (
      <div className="json-literal json-null"
        onDoubleClick={editInPopup}
        onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
      >
        null
      </div>
    );
  } else {
    return (
      <div className="json-literal"
        onDoubleClick={editInPopup}
        onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
      >
        {data || ''}
      </div>
    );
  }
}
