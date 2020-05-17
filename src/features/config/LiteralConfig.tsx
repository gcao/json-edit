import React from 'react';
import { GenericProps } from './GenericConfig';

export default function LiteralConfig({ config }: GenericProps) {
  let label = "Literal";

  if (config.type === "string") {
    label = "String";
  } else if (config.type === "number") {
    label = "Number";
  } else if (config.type === "boolean") {
    label = "Boolean";
  } else if (config.type === "any") {
    label = "Any";
  }

  return (
    <div className="json-config literal">
      <div>{label}</div>
    </div>
  );
}
