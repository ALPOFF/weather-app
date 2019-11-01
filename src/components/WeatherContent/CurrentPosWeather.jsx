import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";
import "./CurrentPosWeather.css"
import gps_icon from "./../../assets/gps_icon.png"

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

    return (
        <div className="top">
         {/*   <nav>
                {city.map(c => <div><NavLink to={'/cities/' + c}>{c}</NavLink></div>)}
            </nav>*/}
            <div className="currentWeather">
                <input placeholder="Enter city ..." value={newCityValue} onKeyDown={EnterDown}
                       onChange={onNewCityValue} type="text"/></div>
            <div className="currentWeather">
                <img src={gps_icon} alt="" height={25}/>
                <a>{weather.name} - </a>  {weather.weather.map(t =>
                <span> <a>{t.description} </a></span>)}
                <a>{Math.ceil(weather.main.temp)}°</a>
            </div>
        </div>
    )
};

export default CurrentPosWeather;

