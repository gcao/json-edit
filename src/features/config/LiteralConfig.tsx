import React from 'react';
import { ConfigItem } from 'src/jconfig';

export default function LiteralConfig({ config }: { config: ConfigItem }) {
  return (
    <div className="json-config literal">
      <div>Literal</div>
    </div>
  );
}
