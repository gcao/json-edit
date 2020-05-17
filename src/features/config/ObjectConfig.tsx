import React from 'react';
import { ConfigItem } from 'src/jconfig';
import GenericConfig, { GenericProps } from './GenericConfig';

export default function ObjectConfig({ config }: GenericProps) {
  return (
    <div className="json-config object">
      <p className="title is-4 json-type">Object</p>
      <table className="table is-bordered is-striped object">
        <tbody>
          {
            Array.from(config.props.keys()).map((key, i) => (
              <tr key={i} className={'row ' + (i % 2 === 0 ? 'odd' : 'even')}>
                <td className="key">{key}</td>
                <td className="value">
                  <GenericConfig config={config.props.get(key) as ConfigItem} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
