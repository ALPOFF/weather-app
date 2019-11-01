import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import WeatherContentContainer from "./containers/WeatherContentContainer/CurrentPosWeatherContainer";
import {Route} from "react-router-dom";
import CityWeatherContainer from "./containers/CityWeatherContainer/CityWeatherContainer";

function App() {
    return (
        <div className="App">
        <div className="wrapper">
            <WeatherContentContainer/>
            <CityWeatherContainer/>
      {/*      <div>
                <Route path='/cities/:city?' render={() => <CityWeatherContainer/>}/>
            </div>*/}
        </div>
        </div>
    );
}

export default App;
