import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getCityWeatherFunc, getNewCityWeatherData, setCity, showCity, unsetCity} from "../../state/weather-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import "./../../components/CityWeather.scss"
import {getCitiesSelector, getCityWeatherSelector} from "../../state/selectors";
import SavedCities from "../../components/SavedCities/SavedCities";
import SelectedCity from "../../components/SelectedCity/SelectedCity";

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
};

const CityWeatherContainer = (props) => {
    let city = props.match.params.city;
    useEffect(() => {
        props.getCityWeatherFunc(city);
        let idArr = props.Cities.map(c => c.id)
        props.getNewCityWeatherData(idArr);
    }, [city]);

    return <div className="city_container">
        {   (props.status) ? <SavedCities cityWeather={props.cityWeather} addCity={addCity}/> : <div className="city_container_item_temp">Ничего не найдено</div>}
        <SelectedCity Cities={props.Cities} showDescription={showDescription} delCity={delCity}/>
    </div>
};

const mapStateToProps = (state) => ({
    cityWeather: getCityWeatherSelector(state),
    Cities: getCitiesSelector(state),
    status: state.weatherReducer.status
});

export default compose(connect(mapStateToProps, {getCityWeatherFunc, setCity, unsetCity, showCity, getNewCityWeatherData}), withRouter)
(CityWeatherContainer);
