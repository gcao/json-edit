import React from 'react';
import { useDispatch } from 'react-redux';

import { createMouseOverHandler } from './utils';
import * as R from 'ramda';

export default function LiteralPresenter(props: any) {
  const dispatch = useDispatch();

  const { data, path, pathUnderMouse } = props;

  if (R.is(Boolean, data)) {
    return (
      <div className="field">
        <input type="checkbox" className="switch is-rounded" checked={data}
          onChange={(value: any)=>{}}
        />
        <label></label>
      </div>
    );
  } else if (data === null) {
    return (
      <div className="json-literal json-null"
        onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
      >
        null
      </div>
    );
  } else {
    return (
      <div className="json-literal"
        onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
      >
        {data || ''}
      </div>
    );
  }
}
