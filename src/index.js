import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Layout from './Layout';
import Example from './components/Example';
import Form from './components/Form';


import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Form/>
    <Example/>
  </React.StrictMode>,
  document.getElementById('root')
);



const sampleFooter = <h1>This is Sample Header</h1>;
ReactDOM.render(sampleFooter,document.getElementById('footer'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
