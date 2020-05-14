import React from 'react';
import { useDispatch } from 'react-redux';
import GenericView from './GenericView';
import { createMouseOverHandler } from './utils';

export default function ArrayOfLiteralsView(props: any) {
  const dispatch = useDispatch();
  let { data, path, pathUnderMouse } = props;

  return (
    <div className="json-literal-array"
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      {
        data.map((row: any, i: number) =>
          <GenericView key={i} data={row} path={path.createArrayChild(i)} />
        )
      }
    </div>
  );
}