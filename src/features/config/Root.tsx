import React from 'react';
import JConfig from 'src/jconfig';
import './index.scss';
import GenericConfig from './GenericConfig';

interface RootProps {
  config: JConfig,
}

export default function Root({ config }: RootProps) {
  return (
    <div className="json-config-root">
      <div>Configuration</div>
      <GenericConfig config={config.root} />
    </div>
  );
}
