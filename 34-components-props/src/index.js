import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// JSX -> Declarative (React-y)
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);


// imperative (Mod 3-esque)
React.createElement("h1", {id:"cat", className: "dog"}, "Goodbye everyone!")

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
