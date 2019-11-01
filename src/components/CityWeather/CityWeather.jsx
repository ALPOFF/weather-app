import React from "react";
import "./CityWeather.css"
import Preloader from "../../common/Preloader/Preloader";

const CityWeather = ({cityWeather, setCity, unsetCity, Cities}) => {

let addCity = () => {
    setCity();
};

let delCity = (e) => {
    let id = e.currentTarget.id;
    unsetCity(id)
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
            {Cities.map(c => <div><a>{c.name}</a><button id={c.id} onClick={delCity}><a>-</a></button></div>)}
        </div>
    </div>
};

export default CityWeather;

