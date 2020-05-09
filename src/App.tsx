import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.scss';

import { selectOrientation, LayoutOrientation } from './features/layout/slice';
import { STATE_KEY, updateJson } from './features/json-edit/slice';
import { JsonRootPresenter } from './features/json-edit/JsonRootPresenter';
import { RootState } from './app/store';

function App() {
  const dispatch = useDispatch();
  const orientation = useSelector(selectOrientation);

  let pathUnderMouse = useSelector((state: RootState) => state[STATE_KEY].pathUnderMouse);
  if (pathUnderMouse != null) {
    pathUnderMouse = pathUnderMouse.toString();
  }
  const rawData = useSelector((state: RootState) => state[STATE_KEY].rawData);

  const data = JSON.parse(rawData);

  let input: any;

  if (orientation === LayoutOrientation.Horizontal) {
    return <div>TODO</div>;
  } else {
    return (
      <div className="App">
        <div>
          Current Path: <span id="path">{pathUnderMouse}</span>
          <JsonRootPresenter data={data} />

          <button className="update"
            onClick={() => dispatch(updateJson(input.value))}
          >Update</button><br />
          <textarea className="raw-json" rows={25} cols={100}
            ref={node => input = node}
            value={rawData}
            onChange={event => dispatch(updateJson(event.target.value))} />
        </div>
      </div>
    );
  }
}

export default App;
