import React from 'react';
import R from 'ramda';

// import JsonPath from '../../json-path';
// import ObjectPresenter from './ObjectPresenter';
// import ArrayPresenter from './ArrayPresenter';
import LiteralPresenter from './LiteralPresenter';

export default function GenericPresenter({data}: any) {
  // if (R.isArrayLike(data)) {
  //   return (<ArrayPresenter {...this.props} />);
  // } else if (R.is(Object, data)) {
  //   return (<ObjectPresenter {...this.props} />);
  // } else {
  //   return (<LiteralPresenter {...this.props} />);
  // }
  return (<LiteralPresenter data={ data } />);
}