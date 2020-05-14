import * as R from 'ramda';
import React from 'react';
import { useDispatch } from 'react-redux';
import ArrayOfArraysView from './ArrayOfArraysView';
import ArrayOfLiteralsView from './ArrayOfLiteralsView';
import ArrayOfObjectsView from './ArrayOfObjectsView';
import { createMouseOverHandler } from './utils';

export default function ArrayView(props: any) {
  const dispatch = useDispatch();

  let { data, path, pathUnderMouse } = props;

  if (R.isEmpty(data)) {
    return (
      <div className="json-empty-array"
        onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
      >Empty array</div>
    );
  } else if (R.is(Array, data[0])) {
    return (<ArrayOfArraysView data={data} path={path} />);
  } else if (R.is(Object, data[0])) {
    return (<ArrayOfObjectsView data={data} path={path} />);
  } else {
    return (<ArrayOfLiteralsView data={data} path={path} />);
  }
}
