import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JPath from '../../jpath';
import { selectEditing } from './edit-popup/slice';
import GenericView from './GenericView';
import { clearPath } from './slice';
import './index.scss';

export function JsonRootView({ data }: any) {
  const dispatch = useDispatch();
  const editing = useSelector(selectEditing);

  const path = JPath.Root();

  const mouseOutHandler = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (!editing) {
      dispatch(clearPath());
    }
  }

  return (
    <div className="json-root"
      onMouseOut={mouseOutHandler}
    >
      <GenericView data={data} path={path} />
    </div>
  );
}