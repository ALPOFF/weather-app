import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getCityWeatherFunc, getNewCityWeatherData, setCity, showCity, unsetCity} from "../../state/weather-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import "./../../components/CityWeather.scss"
import {getCitiesSelector, getCityWeatherSelector} from "../../state/selectors";
import SavedCities from "../../components/SavedCities/SavedCities";
import SelectedCity from "../../components/SelectedCity/SelectedCity";

const CityWeatherContainer = (props) => {
    let city = props.match.params.city;
    useEffect(() => {
        props.getCityWeatherFunc(city);
        let idArr = props.Cities.map(c => c.id)
        props.getNewCityWeatherData(idArr);
    }, [city]);

    let addCity = () => {
        props.setCity();
    };

    let delCity = (e) => {
        let id = e.currentTarget.id;
        props.unsetCity(id)
    };

    let showDescription = (e) => {
        let id = e.currentTarget.id;
        props.showCity(id)
    };

    return <div className="city_container">
        {props.status
            ? <SavedCities cityWeather={props.cityWeather} status={props.status} addCity={addCity}/>
            : <div className="city_container_item_temp">
                Your search did not match any documents. <br/>
                Suggestions:
                Make sure that country the name of the country is spelled correctly.
        </div>}
        <SelectedCity delCity={delCity} showDescription={showDescription} Cities={props.Cities}/>
    </div>
};

const mapStateToProps = (state) => ({
    cityWeather: getCityWeatherSelector(state),
    Cities: getCitiesSelector(state),
    status: state.weatherReducer.status,
    newCityValue: state.weatherReducer.newCityValue
});

export default compose(connect(mapStateToProps, {
    getCityWeatherFunc,
    setCity,
    unsetCity,
    showCity,
    getNewCityWeatherData
}), withRouter)
(CityWeatherContainer);
