import React from 'react';
import * as R from 'ramda';

import ObjectPresenter from './ObjectPresenter';
import ArrayPresenter from './ArrayPresenter';
import LiteralPresenter from './LiteralPresenter';

export default function GenericPresenter(props: any) {
  const {data} = props;

  if (R.is(Array, data)) {
    return (<ArrayPresenter {...props} />);
  } else if (R.is(Object, data)) {
    return (<ObjectPresenter {...props} />);
  } else {
    return (<LiteralPresenter {...props} />);
  }
}
