import React, {useEffect} from "react";
import "./WeatherContentContainer.css"
import {usePosition} from "../../helpers/usePosition";
import WeatherContent from "../../components/WeatherContent/WeatherContent";
import {connect} from "react-redux";
import {getWeatherFunc} from "../../state/weather-reducer";

const WeatherContentContainer = (props) => {

    const {latitude, longitude, error} = usePosition();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            props.getWeatherFunc(pos.coords.latitude, pos.coords.longitude)
        })
    }, []);

    let getWeather = () => {
        console.log(latitude)

        props.getWeatherFunc(latitude, longitude);
    };

    return <WeatherContent latitude={latitude} weather={props.weather} longitude={longitude} getWeather={getWeather}/>
};

const mapStateToProps = (state) => ({
    weather: state.weatherReducer.weather
});

export default connect(mapStateToProps, {getWeatherFunc})(WeatherContentContainer);
