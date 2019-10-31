import React, {useEffect} from "react";

const WeatherContent = ({latitude, longitude, getWeather, weather}) => {


    return (
        <div className="content">
            <button onClick={getWeather}>get weather</button>
            <button>Add City</button>
            <button>Delete City</button>
            <div>
                coords - {latitude},
                {longitude} <br/>
                weather - {weather.weather.map(t => <span>{t.description}</span>)}
            </div>
        </div>
    )
};

export default WeatherContent;

