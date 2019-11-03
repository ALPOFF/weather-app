import React from "react";
import add_icon from "../../assets/add_icon.png";

let SavedCities = ({cityWeather, addCity}) => {
    return <div className="city_container_item_temp">
        <div className="city_container_item_temp_item">
            <div className="city_title">
                <h3>{cityWeather.name}</h3>
                <img onClick={addCity} src={add_icon} alt="add_icon" height={12} />
            </div>
            <div className="city_weather_details">
                {cityWeather.weather.map(t =>
                    <img src={`http://openweathermap.org/img/wn/${t.icon}@2x.png`} alt=""/>)}
                <div className="city_weather_details_descipt">
                    {cityWeather.weather.map(t =>
                        <a>{t.description}</a>)}
                    Temperature: {Math.round(cityWeather.main.temp)}°
                    Pressure: {cityWeather.main.pressure} hPa
                    Humidity: {cityWeather.main.humidity} %
                </div>
            </div>
        </div>
    </div>
};

export default SavedCities;
