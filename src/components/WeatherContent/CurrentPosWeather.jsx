import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import "./CurrentPosWeather.scss"
import gps_icon from "./../../assets/gps_icon.png"

const CurrentPosWeather = ({weather, newCityValue, setNewCityValue, getCityWeatherFunc}) => {

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
            <div className="currentWeather">
                <input placeholder="Enter city ..." value={newCityValue} onKeyDown={EnterDown}
                       onChange={onNewCityValue} type="text"/></div>
            <div className="currentWeather">
                <img src={gps_icon} alt="gps_icon" height={25}/>
                <a>{weather.name}</a>
                <a>{Math.ceil(weather.main.temp)}°</a>
            </div>
        </div>
    )
};

export default CurrentPosWeather;

