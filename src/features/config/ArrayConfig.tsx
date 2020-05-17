import React from 'react';
import { ConfigItem } from 'src/jconfig';
import GenericConfig from './GenericConfig';

export default function ArrayConfig({ config }: { config: ConfigItem }) {
  let children = config.children;

  return (
    <div className="json-config array">
      <p className="title is-5 json-type">Array of</p>
      <GenericConfig config={children} />
    </div>
  );
}
