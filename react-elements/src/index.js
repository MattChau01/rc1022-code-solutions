import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';

const reactElement = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container);

root.render(reactElement);

console.log('React.CreateElement: ', reactElement);
