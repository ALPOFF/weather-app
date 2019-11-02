import React, {useEffect} from "react";
import "./CityWeather.scss"

const CityWeather = ({cityWeather, setCity, unsetCity, Cities, showCity}) => {

    let addCity = () => {
        setCity();
    };

    let delCity = (e) => {
        let id = e.currentTarget.id;
        unsetCity(id)
    };

    let showDescription = (e) => {
        let id = e.currentTarget.id;
        showCity(id)
    }

    return <div className="city_container">
        <div className="city_container_item_temp">
            <div className="city_container_item_temp_item">
                <div className="city_title">
                    <a>{cityWeather.name}</a>
                    <button onClick={addCity}><a>+</a></button>
                </div>
                <div className="city_weather_details">
                    {cityWeather.weather.map(t =>
                        <img src={`http://openweathermap.org/img/wn/${t.icon}@2x.png`} alt=""/>)}
                    <div className="city_weather_details_descipt">
                        {cityWeather.weather.map(t =>
                            <a>{t.description} </a>)}
                        <a> Temperature: {Math.ceil(cityWeather.main.temp)}° </a>
                        <a> Pressure: {cityWeather.main.pressure} hPa</a>
                        <a> Humidity: {cityWeather.main.humidity} %</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="city_container_item_set">
            {Cities.map(c => <div className="cities">
                <img id={c.id} onClick={showDescription}
                     src="https://www.fortcollinsdogwizard.com/resources/info.png?timestamp=1507522652765" alt=""
                     height={25}/>
                <a>{c.name + " " +
                Math.ceil(c.main.temp)}°</a>
                <button id={c.id} onClick={delCity}>
                    <a> - </a></button>
            </div>)}
        </div>
    </div>
};

export default CityWeather;

