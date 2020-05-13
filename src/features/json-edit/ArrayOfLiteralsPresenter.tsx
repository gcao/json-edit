import React from 'react';
import { useDispatch } from 'react-redux';
import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from './utils';

export default function ArrayOfLiteralsPresenter(props: any) {
  const dispatch = useDispatch();
  let { data, path, pathUnderMouse } = props;

  return (
    <div className="json-literal-array"
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      {
        data.map((row: any, i: number) =>
          <GenericPresenter key={i} data={row} path={path.createArrayChild(i)} />
        )
      }
    </div>
  );
}