import React from 'react';
import ReactDOM from 'react-dom/client';
import Password from './validated-input';

const password = <Password />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(password);
