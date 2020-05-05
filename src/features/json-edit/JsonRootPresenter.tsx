import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseOutHandler } from '../../utils';
import { pathUnderMouseSel } from './reducers';

export function JsonRootPresenter({data}: any) {
  const dispatch = useDispatch();
  const pathUnderMouse = useSelector(pathUnderMouseSel);

  const path = new JsonPath([]);

  return (
    <div className="json-root"
      onMouseOut={ createMouseOutHandler(dispatch) }
    >
      <GenericPresenter data={data} path={path} pathUnderMouse={pathUnderMouse} />
    </div>
  );
}