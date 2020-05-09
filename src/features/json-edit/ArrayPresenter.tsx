import React from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import ArrayOfArraysPresenter from './ArrayOfArraysPresenter';
import ArrayOfObjectsPresenter from './ArrayOfObjectsPresenter';
import ArrayOfLiteralsPresenter from './ArrayOfLiteralsPresenter';
import { createMouseOverHandler } from './utils';

export default function ArrayPresenter(props: any) {
  const dispatch = useDispatch();

  let { data, path, pathUnderMouse } = props;

  if (R.isEmpty(data)) {
    return (
      <div className="json-empty-array"
        onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
      >Empty array</div>
    );
  } else if (R.is(Array, data[0])) {
    return (<ArrayOfArraysPresenter data={data} path={path} />);
  } else if (R.is(Object, data[0])) {
    return (<ArrayOfObjectsPresenter data={data} path={path} />);
  } else {
    return (<ArrayOfLiteralsPresenter data={data} path={path} />);
  }
}
