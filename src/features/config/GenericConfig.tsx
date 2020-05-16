import React from 'react';
import { ConfigItem } from 'src/jconfig';
import LiteralConfig from './LiteralConfig';

export interface GenericProps {
  config: ConfigItem,
}

export default function GenericConfig({ config }: GenericProps) {
  if (config.type === "array") {
    return (
      <div>
        <div>Array</div>
        <GenericConfig config={config.children} />
      </div>
    );
  } else if (config.type === "object") {
    return (
      <div>
        <div>Object</div>
      </div>
    );
  } else {
    return (
      <div>
        <LiteralConfig config={config} />
      </div>
    );
  }
}
