import React from 'react';
import { useDispatch } from 'react-redux';
import { RIEInput } from 'riek';

import { updateData } from '../../actions';
import { createMouseOverHandler } from '../../utils';

export default function LiteralPresenter(props: any) {
  const dispatch = useDispatch();

  const {data, path, pathUnderMouse} = props;

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
