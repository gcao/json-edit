import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';

import GenericPresenter from './GenericPresenter';
import { createMouseOutHandler } from './utils';
import JPath from '../../jpath';
import { STATE_KEY } from './slice';

export function JsonRootPresenter({data}: any) {
  const dispatch = useDispatch();
  const pathUnderMouse = useSelector((state: any) => state[STATE_KEY].pathUnderMouse);

  const path = JPath.Root();

  return (
    <div className="json-root"
      onMouseOut={ createMouseOutHandler(dispatch) }
    >
      <GenericPresenter data={data} path={path} pathUnderMouse={pathUnderMouse} />
    </div>
  );
}