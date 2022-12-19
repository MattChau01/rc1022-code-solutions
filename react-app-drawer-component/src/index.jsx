import React from 'react';
import ReactDOM from 'react-dom/client';
import DrawerModal from './app-drawer';

const drawer = <DrawerModal />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(drawer);
