import React, {useEffect} from "react";
import "./CurrentPosWeatherContainer.css"
import {usePosition} from "../../helpers/usePosition";
import CurrentPosWeather from "../../components/WeatherContent/CurrentPosWeather";
import {connect} from "react-redux";
import {getWeatherFunc} from "../../state/weather-reducer";
import Preloader from "../../common/Preloader/Preloader";

const CurrentPosWeatherContainer = (props) => {

    const {latitude, longitude} = usePosition();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            props.getWeatherFunc(pos.coords.latitude, pos.coords.longitude)
        })
    }, []);

    let getWeather = () => {
        props.getWeatherFunc(latitude, longitude);
    };

    return <CurrentPosWeather latitude={latitude} weather={props.weather} longitude={longitude} getWeather={getWeather}/>
};

const mapStateToProps = (state) => ({
    weather: state.weatherReducer.weather
});

export default connect(mapStateToProps, {getWeatherFunc})(CurrentPosWeatherContainer);
