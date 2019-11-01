import React from "react";
import "./CityWeather.css"
import Preloader from "../../common/Preloader/Preloader";

const CityWeather = ({cityWeather, setCity, Cities}) => {

let addCity = () => {
    setCity();
};

    return <div className="city_container">
        <div className="city_container_item_temp">
            <div>
                <a>{cityWeather.name} - </a> {cityWeather.weather.map(t =>
                <a>{t.description} </a>)}
                <a>{Math.ceil(cityWeather.main.temp)}°</a>
                <button onClick={addCity}><a>+</a></button>
            </div>
        </div>
        <div className="city_container_item_set"><a>Your cities</a><br/>
            {Cities.map(c => c.name)}
        </div>
    </div>
};

export default CityWeather;

