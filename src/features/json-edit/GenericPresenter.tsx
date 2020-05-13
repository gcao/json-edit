import * as R from 'ramda';
import React from 'react';
import ArrayPresenter from './ArrayPresenter';
import LiteralPresenter from './LiteralPresenter';
import ObjectPresenter from './ObjectPresenter';

export default function GenericPresenter(props: any) {
  const { data } = props;

  if (R.is(Array, data)) {
    return (<ArrayPresenter {...props} />);
  } else if (R.is(Object, data)) {
    return (<ObjectPresenter {...props} />);
  } else {
    return (<LiteralPresenter {...props} />);
  }
}
