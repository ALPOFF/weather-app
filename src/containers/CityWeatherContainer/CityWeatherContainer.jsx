import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getCityWeatherFunc, setCity, showCity, unsetCity} from "../../state/weather-reducer";
import CityWeather from "../../components/CityWeather/CityWeather";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Preloader from "../../common/Preloader/Preloader";

const CityWeatherContainer = (props) => {
    let city = props.match.params.city;
    useEffect(() => {

        console.log(city)
        props.getCityWeatherFunc(city);
        console.log("RENDER")
    }, [city]);

    if (!props.cityWeather.weather) {
        return <Preloader/>
    }

    return <CityWeather cityWeather={props.cityWeather} showCity={props.showCity} unsetCity={props.unsetCity} setCity={props.setCity} Cities={props.Cities}/>

};

const mapStateToProps = (state) => ({
    cityWeather: state.weatherReducer.cityWeather,
    xxx: state.weatherReducer.xxx,
    Cities: state.weatherReducer.Cities
});

export default compose(connect(mapStateToProps, {getCityWeatherFunc, setCity, unsetCity, showCity}), withRouter)
(CityWeatherContainer);
