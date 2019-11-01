import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import "./CurrentPosWeather.css"

const CurrentPosWeather = ({latitude, longitude, getWeather, weather, newCityValue, setNewCityValue, getCityWeatherFunc}) => {

    if (!weather.main.temp) {
        return <Preloader/>
    }

    let onNewCityValue = (e) => {
        let newCityValue = e.target.value;
        setNewCityValue(newCityValue)
    }

    let EnterDown = (e) => {
        if (e.key === 'Enter') {
            let newCityValue = e.target.value;
            getCityWeatherFunc(newCityValue)
        }
    }

    let city = ["Moscow", "Sarov", "Spain"];
    return (
        <div className="top">
            <nav>
                {city.map(c => <div><NavLink to={'/cities/' + c}>{c}</NavLink></div>)}
            </nav>
            <div className="currentWeather">
                <input placeholder="Enter city ..." value={newCityValue} onKeyDown={EnterDown}
                       onChange={onNewCityValue} type="text"/></div>
            <div className="currentWeather">
                <img src="http://pngimg.com/uploads/gps/gps_PNG34.png" alt="" height={25}/>
                <a>{weather.name}</a> - {weather.weather.map(t =>
                <span> <a>{t.description} </a></span>)}
                <a>{Math.ceil(weather.main.temp)}°</a>
            </div>
        </div>
    )
};

export default CurrentPosWeather;

