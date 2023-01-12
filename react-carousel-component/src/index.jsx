import React from 'react';
import ReactDOM from 'react-dom/client';
import CarouselComp from './carousel';

const imagePath = [
  { id: 0, image: '../imgs/001.png' },
  { id: 1, image: '../imgs/004.png' },
  { id: 2, image: '../imgs/007.png' },
  { id: 3, image: '../imgs/025.png' }
];

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<CarouselComp imagePath={imagePath} />);
