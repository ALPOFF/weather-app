import React, {useEffect} from "react";
import "./CityWeather.scss";
import delete_icon from "./../../assets/delete_icon.png";
import add_icon from "./../../assets/add_icon.png"

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
                    <h3>{cityWeather.name}</h3>
                    <img onClick={addCity} src={add_icon} alt="add_icon" height={12} />
                </div>
                <div className="city_weather_details">
                    {cityWeather.weather.map(t =>
                        <img src={`http://openweathermap.org/img/wn/${t.icon}@2x.png`} alt=""/>)}
                    <div className="city_weather_details_descipt">
                        {cityWeather.weather.map(t =>
                            <a>{t.description}</a>)}
                            Temperature: {Math.ceil(cityWeather.main.temp)}°

                        Pressure: {cityWeather.main.pressure} hPa
                        Humidity: {cityWeather.main.humidity} %
                    </div>
                </div>
            </div>
        </div>

        <div className="city_container_item_set">
            {Cities.map(c => <div className="cities">
                <img id={c.id} onClick={showDescription}
                     src="https://www.fortcollinsdogwizard.com/resources/info.png?timestamp=1507522652765" alt=""
                     height={25}/>
                     <img id={c.id} src={delete_icon} alt="delete_icon" height={19} onClick={delCity}/>
                {c.name + " " +
                Math.ceil(c.main.temp)}°
            </div>)}
        </div>
    </div>
};

export default CityWeather;

