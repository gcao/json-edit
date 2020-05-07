import React from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from './utils';

export default function ArrayOfArraysPresenter(props: any) {
  const dispatch = useDispatch();

  let { data, path, pathUnderMouse } = props;
  let width = Number(R.last(data.map(R.length).sort()));

  return (
    <table className={'table json-array-array'}
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      <thead>
        <tr className="head">
          <th className="index-col">&nbsp;</th>
          {
            R.times((i) =>
              <th align="center" key={i}
                onMouseOver={createMouseOverHandler(props.dispatch, path.createArrayAllChildren().createArrayChild(i), pathUnderMouse)}
              >{i + 1}</th>
              , width)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row: any, i: number) =>
            <tr key={i} className={'row ' + (i % 2 === 0 ? 'odd' : 'even')}>
              <td align="right" valign="middle" className="index-col"
                onMouseOver={createMouseOverHandler(props.dispatch, path.createArrayChild(i), pathUnderMouse)}
              >{i + 1}</td>
              {
                R.times((j) => {
                  let newPath = path.createArrayChild(i).createArrayChild(j);
                  return (
                    <td key={j}
                      onMouseOver={createMouseOverHandler(props.dispatch, newPath, pathUnderMouse)}
                    >
                      <GenericPresenter data={row[j]} path={newPath} pathUnderMouse={pathUnderMouse} />
                    </td>
                  );
                }, width)
              }
            </tr>
          )
        }
      </tbody>
    </table>
  );
}