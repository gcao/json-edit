import React from 'react';
import { useDispatch } from 'react-redux';

import { createMouseOverHandler } from './utils';

export default function LiteralPresenter(props: any) {
  const dispatch = useDispatch();

  const {data, path, pathUnderMouse} = props;

  return (
    <div className="json-literal"
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      {data || ''}
    </div>
  );
}
