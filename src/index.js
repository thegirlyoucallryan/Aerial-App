import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { TrainingContextProvider } from './components/store/Training-context';


import App from './App';


ReactDOM.render(
<TrainingContextProvider>
  <BrowserRouter>
   <App />
   </BrowserRouter>
   </TrainingContextProvider>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportW
