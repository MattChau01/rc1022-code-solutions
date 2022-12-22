import React from 'react';
import ReactDOM from 'react-dom/client';
import AccordionComp from './accordion';

const accordion = <AccordionComp />;
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(accordion);
