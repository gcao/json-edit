import * as R from 'ramda';
import React from 'react';
import ArrayView from './ArrayView';
import LiteralView from './LiteralView';
import ObjectView from './ObjectView';

export default function GenericView(props: any) {
  const { data } = props;

  if (R.is(Array, data)) {
    return (<ArrayView {...props} />);
  } else if (R.is(Object, data)) {
    return (<ObjectView {...props} />);
  } else {
    return (<LiteralView {...props} />);
  }
}
