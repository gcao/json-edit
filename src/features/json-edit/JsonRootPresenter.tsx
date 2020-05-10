import React from 'react';
import { useDispatch } from 'react-redux';
import JPath from '../../jpath';
import GenericPresenter from './GenericPresenter';
import { clearPath } from './slice';
import './styles.scss';

export function JsonRootPresenter({ data }: any) {
  const dispatch = useDispatch();

  const path = JPath.Root();

  return (
    <div className="json-root" onMouseOut={() => dispatch(clearPath())}>
      <GenericPresenter data={data} path={path} />
    </div>
  );
}