import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleSwitch from './toggle-switch';

const toggle = <ToggleSwitch />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(toggle);
