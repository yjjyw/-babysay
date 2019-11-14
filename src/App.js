import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MapRouter from './router/MapRouter';
import route from './router/route.config';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MapRouter route={route}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
