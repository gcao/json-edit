import React from 'react';

// import JsonPath from '../../json-path';
import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from '../../utils';

export default function ArrayOfLiteralsPresenter(props: any) {
  let { data, path, pathUnderMouse } = props;

  return (
    <div className={'json-literal-array depth' + path.size()}
      onMouseOver={createMouseOverHandler(props.dispatch, path, pathUnderMouse)}
    >
      {
        data.map((row: any, i: number) =>
          <GenericPresenter key={i} data={row} path={path.append(i)} />
        )
      }
    </div>
  );
}