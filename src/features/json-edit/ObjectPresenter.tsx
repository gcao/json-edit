import React from 'react';
import { useDispatch } from 'react-redux';
import { RIEInput } from 'riek';

import { updatePropName } from '../../actions';
import GenericPresenter from './GenericPresenter';
import { createMouseOverHandler } from '../../utils';

export default function ObjectPresenter(props: any) {
  const dispatch = useDispatch();

  let { data, path, pathUnderMouse } = props;

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
                onMouseOver={createMouseOverHandler(dispatch, path.append(key), pathUnderMouse)}
              >
                <RIEInput value={key || ''} propName="data"
                  change={(change: any) => {
                    if (key !== change.data) {
                      dispatch(updatePropName(path, key, change.data));
                    }
                  }}
                />
              </td>
              <td className="prop-value"
                onMouseOver={createMouseOverHandler(dispatch, path.append(key), pathUnderMouse)}
              >
                <GenericPresenter data={data[key]} path={path.append(key)} />
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}
