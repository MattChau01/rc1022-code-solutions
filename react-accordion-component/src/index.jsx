import React from 'react';
import ReactDOM from 'react-dom/client';
import AccordionComp from './accordion';

const topics = [
  {
    num: '0',
    name: 'Hypertext Markup Language',
    description: 'HTML (HyperText Markup Language) is the most basic building block of the Web.'
  },
  {
    num: '1',
    name: 'Cascading Style Sheets',
    description: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML.'
  },
  {
    num: '2',
    name: 'JavaScript',
    description: 'JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.'
  }
];

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<AccordionComp topics={topics} />);
