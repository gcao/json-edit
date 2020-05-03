import React from 'react';
import { useDispatch } from 'react-redux';
import { RIEInput } from 'riek';

// import JsonPath from '../../json-path';
import { updateData } from '../../actions';
import { createMouseOverHandler } from '../../utils';

export default function LiteralPresenter(data: any, path: any) {
  const dispatch = useDispatch();
  let pathUnderMouse: any = '';

  return (
    <div className={'json-literal depth' + path.size()}
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      <RIEInput value={data || ''} propName="data"
        change={(change: any) => {
          if (data !== change.data) {
            dispatch(updateData(path, change.data));
          }
        }}
      />
    </div>
  );
}
