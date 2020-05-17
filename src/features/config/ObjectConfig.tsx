import React from 'react';
import { ConfigItem } from 'src/jconfig';
import GenericConfig, { GenericProps } from './GenericConfig';

export default function ObjectConfig({ config }: GenericProps) {
  if (config.props.size === 0) {
    return <p className="title is-4">Object</p>;
  }
  return (
    <table className="table is-bordered is-striped object">
      <thead>
        <tr className="head">
          <th align="right">&lt;name&gt;</th>
          <th>&lt;value&gt;</th>
        </tr>
      </thead>
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
  );
}
