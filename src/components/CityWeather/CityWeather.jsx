import React from "react";

const CityWeather = ({cityWeather}) => {

    return <>
        <a>{cityWeather.name}</a> - {cityWeather.weather.map(t =>
        <span> <a>{t.description} </a></span>)}
        <a>{Math.ceil(cityWeather.main.temp)}°</a>
    </>
};

export default CityWeather;

