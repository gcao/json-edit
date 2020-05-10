import * as R from 'ramda';
import React from 'react';
import { useDispatch } from 'react-redux';
import ArrayOfArraysPresenter from './ArrayOfArraysPresenter';
import ArrayOfLiteralsPresenter from './ArrayOfLiteralsPresenter';
import ArrayOfObjectsPresenter from './ArrayOfObjectsPresenter';
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
