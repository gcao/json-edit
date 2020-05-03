import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pathUnderMouseSel } from './features/json-edit/reducers';
import { updateJSON } from './actions';
import { JsonRootPresenter } from './features/json-edit/JsonRootPresenter';

import './App.scss';

const RAW_DATA = `
  {
    "a": "a-value",
    "b": [
      {
        "first": "first value",
        "second": "second value"
      },
      {
        "first": "first value 2",
        "second": "second value 2"
      },
      {
        "first": "first value 3",
        "second": "second value 3",
        "third": "third value 3"
      }
    ],
    "c": [
      [
        "cell 1-1",
        {
          "first": "first value",
          "second": "second value"
        }
      ],
      [
        "cell 2-1",
        {
          "first": "first value",
          "second": "second value"
        }
      ]
    ],
    "d": { "name": "John Doe", "age": 20, "email": "john_doe@company.com" },
    "e": [ "Test 1", "Test 2", "Test 3" ],
    "f": []
  }
`;

function App() {
  const dispatch = useDispatch();
  const [rawData] = useState(RAW_DATA);
  const data = JSON.parse(rawData);
  const pathUnderMouse = useSelector(pathUnderMouseSel);

  let input: any;

  return (
    <div className="App">
      <div>
        <h1>JSON Presenter</h1>

        Path: <span id="path">{pathUnderMouse}</span>
        <JsonRootPresenter data={data} pathUnderMouse={pathUnderMouse}/>

        <button className="update"
          onClick={() => dispatch(updateJSON(input.value))}
        >Update</button><br />
        <textarea className="raw-json" rows={25} cols={100}
          ref={node => input = node}
          value={rawData}
          onChange={event => dispatch(updateJSON(event.target.value))}
        />
      </div>
    </div>
  );
}

export default App;
