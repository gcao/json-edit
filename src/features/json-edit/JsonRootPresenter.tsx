import React from 'react';
import { useDispatch } from 'react-redux';

import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseOutHandler } from '../../utils';

export function JsonRootPresenter({data}: any) {
  const dispatch = useDispatch();

  let path = new JsonPath([]);

  return <div className= "json-root" onMouseOut = { createMouseOutHandler(dispatch) }>
    <GenericPresenter data={data} path={path} />
  </div>;
}