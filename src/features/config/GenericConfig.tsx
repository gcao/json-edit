import React from 'react';
import { ConfigItem } from 'src/jconfig';
import ArrayConfig from './ArrayConfig';
import LiteralConfig from './LiteralConfig';
import ObjectConfig from './ObjectConfig';

export interface GenericProps {
  config: ConfigItem,
}

export default function GenericConfig({ config }: GenericProps) {
  if (config.type === "array") {
    return (
      <ArrayConfig config={config} />
    );
  } else if (config.type === "object") {
    return (
      <ObjectConfig config={config} />
    );
  } else {
    return (
      <LiteralConfig config={config} />
    );
  }
}
