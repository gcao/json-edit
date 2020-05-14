import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './app/store';
import { updateJson } from './features/json-edit/slice';
import './index.scss';
import LocationHandler from './utils';

let jsonString = `
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
    "f": true,
    "g": [],
    "h": {},
    "i": null
  }
`;

const locationHandler = new LocationHandler();
if (locationHandler.hasJson) {
  (async () => {
    jsonString = await locationHandler.getText();
    store.dispatch(updateJson(jsonString));
  })();
} else {
  store.dispatch(updateJson(jsonString));
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
