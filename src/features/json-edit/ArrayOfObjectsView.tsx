import * as R from 'ramda';
import React from 'react';
import { useDispatch } from 'react-redux';
import GenericView from './GenericView';
import { createMouseOverHandler } from './utils';

export default function ArrayOfObjectsView(props: any) {
  const dispatch = useDispatch();

  let { data, path, pathUnderMouse } = props;
  let keys = R.uniq(R.flatten(R.map(Object.keys, data)));

  return (
    <table className="table json-object-array"
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      <tbody>
        <tr className="head">
          <th className="index-col">&nbsp;</th>
          {
            keys.map((key, i) =>
              <th key={i}
                onMouseOver={createMouseOverHandler(dispatch, path.createArrayAllChildren().createMapKeyChild(key), pathUnderMouse)}
              >{key}</th>
            )
          }
        </tr>
        {
          data.map((row: any, i: number) =>
            <tr key={i} className={'row ' + (i % 2 === 0 ? 'odd' : 'even')}
              onMouseOver={createMouseOverHandler(dispatch, path.createArrayChild(i), pathUnderMouse)}
            >
              <td align="right" valign="middle" className="index-col">{i + 1}</td>
              {
                keys.map((key, j) => {
                  let newPath = path.createArrayChild(i).createMapValueChild(key);
                  return (
                    <td key={j}
                      onMouseOver={createMouseOverHandler(dispatch, newPath, pathUnderMouse)}
                    >
                      <GenericView data={row[key]} path={newPath} pathUnderMouse={pathUnderMouse} />
                    </td>
                  );
                })
              }
            </tr>
          )
        }
      </tbody>
    </table>
  );
}
