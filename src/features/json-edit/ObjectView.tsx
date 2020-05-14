import * as R from 'ramda';
import React from 'react';
import { useDispatch } from 'react-redux';
import GenericView from './GenericView';
import { createMouseOverHandler } from './utils';

export default function ObjectView(props: any) {
  const dispatch = useDispatch();

  let { data, path, pathUnderMouse } = props;

  if (R.isEmpty(data)) {
    return (
      <div className="json-empty-object"
        onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
      >Empty object</div>
    );
  }

  return (
    <table className="table is-bordered is-striped json-object"
      onMouseOver={createMouseOverHandler(dispatch, path, pathUnderMouse)}
    >
      <thead>
        <tr className="head">
          <th align="right">&lt;name&gt;</th>
          <th>&lt;value&gt;</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(data).sort().map((key, i) =>
            <tr key={key} className={'row ' + (i % 2 === 0 ? 'odd' : 'even')}>
              <td align="right" valign="middle" className="prop-name"
                onMouseOver={createMouseOverHandler(dispatch, path.createMapKeyChild(key), pathUnderMouse)}
              >
                {key || ''}
              </td>
              <td className="prop-value"
                onMouseOver={createMouseOverHandler(dispatch, path.createMapValueChild(key), pathUnderMouse)}
              >
                <GenericView data={data[key]} path={path.createMapValueChild(key)} />
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}
