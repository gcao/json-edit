import React from 'react';
import { ConfigItem } from 'src/jconfig';
import GenericConfig from './GenericConfig';

export default function ArrayConfig({ config }: { config: ConfigItem }) {
  return (
    <div className="json-config array">
      <p className="title is-4 json-type">Array</p>
      <GenericConfig config={config.children} />
    </div>
  );
}
