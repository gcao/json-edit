import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SplitPane from 'react-split-pane';
import './App.scss';
import Root from './features/config/Root';
import { selectConfig } from './features/json-edit/slice';
import JsonEditPopup from './features/json-edit/JsonEditPopup';
import { JsonRootView } from './features/json-edit/JsonRootView';
import { selectData, selectJsonString, selectPathUnderMouse, updateJson } from './features/json-edit/slice';

export default function App() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const config = useSelector(selectConfig);
  const jsonString = useSelector(selectJsonString);

  let pathUnderMouse: any = useSelector(selectPathUnderMouse);
  if (pathUnderMouse != null) {
    pathUnderMouse = pathUnderMouse.toString();
  }

  let input: any;

  return (
    <div className="App">
      <div>
        Current Path: <span id="path">{pathUnderMouse}</span>
        <SplitPane split="vertical">
          <JsonRootView data={data} />
          {
            config ? <Root config={config} /> : ""
          }
        </SplitPane>

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
