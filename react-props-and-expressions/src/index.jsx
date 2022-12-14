import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return (<button> {props.text} </button>);
}

const container = document.getElementById('root');

const element = (
  <div>
    <CustomButton text='I' />
    <CustomButton text='know' />
    <CustomButton text='React!' />
  </div>
);

const root = ReactDOM.createRoot(container);

root.render(element);
