import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getCityWeatherFunc, getNewCityWeatherData, setCity, showCity, unsetCity} from "../../state/weather-reducer";
import CityWeather from "../../components/CityWeather/CityWeather";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getCitiesSelector, getCityWeatherSelector} from "../../state/selectors";

const CityWeatherContainer = (props) => {
    let city = props.match.params.city;
    useEffect(() => {
        props.getCityWeatherFunc(city);
        let idArr = props.Cities.map(c => c.id)
        props.getNewCityWeatherData(idArr);
    }, [city]);

    return <CityWeather cityWeather={props.cityWeather}
                        showCity={props.showCity}
                        unsetCity={props.unsetCity}
                        setCity={props.setCity}
                        Cities={props.Cities}/>
};

const mapStateToProps = (state) => ({
    cityWeather: getCityWeatherSelector(state),
    Cities: getCitiesSelector(state)
});

export default compose(connect(mapStateToProps, {getCityWeatherFunc, setCity, unsetCity, showCity, getNewCityWeatherData}), withRouter)
(CityWeatherContainer);
