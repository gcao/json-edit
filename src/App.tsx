import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { RootState } from './app/store';
import JsonEditPopup from './features/json-edit/JsonEditPopup';
import { JsonRootPresenter } from './features/json-edit/JsonRootPresenter';
import { selectData, selectPathUnderMouse, STATE_KEY, updateJson } from './features/json-edit/slice';
import { LayoutOrientation, selectOrientation } from './features/layout/slice';

function App() {
  const dispatch = useDispatch();
  const orientation = useSelector(selectOrientation);
  const data = useSelector(selectData);
  const rawData = useSelector((state: RootState) => state[STATE_KEY].rawData);

  let pathUnderMouse: any = useSelector(selectPathUnderMouse);
  if (pathUnderMouse != null) {
    pathUnderMouse = pathUnderMouse.toString();
  }

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
          >Update</button>
          <br />
          <textarea className="raw-json" rows={25} cols={100}
            ref={node => input = node}
            value={rawData}
            onChange={event => dispatch(updateJson(event.target.value))} />
        </div>
        <JsonEditPopup />
      </div>
    );
  }
}

export default App;
