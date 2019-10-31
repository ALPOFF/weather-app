import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import WeatherContentContainer from "./containers/WeatherContentContainer/WeatherContentContainer";

function App() {
  return (
    <div className="App">
      <Header/>
      <WeatherContentContainer/>
    </div>
  );
}

export default App;
