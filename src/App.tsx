import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.scss';

import { STATE_KEY } from './features/json-edit/reducers';
import { updateJSON } from './actions';
import { JsonRootPresenter } from './features/json-edit/JsonRootPresenter';
import { RootState } from './app/store';

function App() {
  const dispatch = useDispatch();
  const pathUnderMouse = useSelector((state: RootState) => state[STATE_KEY].pathUnderMouse);
  const rawData = useSelector((state: RootState) => state[STATE_KEY].rawData);

  const data = JSON.parse(rawData);

  let input: any;

  return (
    <div className="App">
      <div>
        <h1>JSON Presenter</h1>

        Path: <span id="path">{pathUnderMouse}</span>
        <JsonRootPresenter data={data} />

        <button className="update"
          onClick={() => dispatch(updateJSON(input.value))}
          >Update</button><br/>
        <textarea className="raw-json" rows={25} cols={100}
          ref={node => input = node}
          value={rawData}
          onChange={event => dispatch(updateJSON(event.target.value))} />
      </div>
    </div>
  );
}

export default App;
