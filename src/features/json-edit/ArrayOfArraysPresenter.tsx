import React from 'react';
import { useDispatch } from 'react-redux';
import * as R from 'ramda';

import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from '../../utils';

export default function ArrayOfArraysPresenter(props: any) {
  const dispatch = useDispatch();

  let { data, path, pathUnderMouse } = props;
  let width = Number(R.last(data.map(R.length).sort()));

  return (
    <table className={'table json-array-array depth' + path.size()}
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      <thead>
        <tr className="head">
          <th className="index-col">&nbsp;</th>
          {
            R.times((i) =>
              <th align="center" key={i}
                onMouseOver={createMouseOverHandler(props.dispatch, path.append(-1).append(i), pathUnderMouse)}
              >{i + 1}</th>
              , width)
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((row: any, i: number) =>
            <tr key={i} className={'row ' + (i % 2 === 0 ? 'odd' : 'even')}>
              <td className="index-col"
                onMouseOver={createMouseOverHandler(props.dispatch, path.append(i), pathUnderMouse)}
              >{i + 1}</td>
              {
                R.times((j) => {
                  return (
                    <td key={j}
                      onMouseOver={createMouseOverHandler(props.dispatch, path.append(i).append(j), pathUnderMouse)}
                    >
                      <GenericPresenter data={row[j]} path={path.append(i).append(j)} />
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