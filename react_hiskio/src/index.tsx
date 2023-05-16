import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ch05/unit4';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// unit3
// setInterval (()=>{
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// },1000)


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);