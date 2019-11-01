import React, {useEffect} from "react";
import "./CurrentPosWeatherContainer.css"
import {usePosition} from "../../helpers/usePosition";
import CurrentPosWeather from "../../components/WeatherContent/CurrentPosWeather";
import {connect} from "react-redux";
import {getCityWeatherFunc, getWeatherFunc, setNewCityValue} from "../../state/weather-reducer";

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

    return <CurrentPosWeather latitude={latitude}
                              newCityValue={props.newCityValue}
                              weather={props.weather}
                              longitude={longitude}
                              getWeather={getWeather}
                              setNewCityValue={props.setNewCityValue}
                              getCityWeatherFunc={props.getCityWeatherFunc} />
};

const mapStateToProps = (state) => ({
    weather: state.weatherReducer.weather,
    newCityValue: state.weatherReducer.newCityValue
});

export default connect(mapStateToProps, {getWeatherFunc, setNewCityValue, getCityWeatherFunc})(CurrentPosWeatherContainer);
