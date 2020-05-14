import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { RootState } from './app/store';
import JsonEditPopup from './features/json-edit/JsonEditPopup';
import { JsonRootView } from './features/json-edit/JsonRootView';
import { selectData, selectPathUnderMouse, STATE_KEY, updateJson } from './features/json-edit/slice';
import { LayoutOrientation, selectOrientation } from './features/layout/slice';

function App() {
  const dispatch = useDispatch();
  const orientation = useSelector(selectOrientation);
  const data = useSelector(selectData);
  const jsonString = useSelector((state: RootState) => state[STATE_KEY].jsonString);

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
          <JsonRootView data={data} />

          <button className="update"
            onClick={() => dispatch(updateJson(input.value))}
          >Update</button>
          <br />
          <textarea className="raw-json" rows={25} cols={100}
            ref={node => input = node}
            value={jsonString}
            onChange={event => dispatch(updateJson(event.target.value))} />
        </div>
        <JsonEditPopup />
      </div>
    );
  }
}

export default App;
