import React from "react";
import "./CityWeather.scss";
import SelectedCity from "./SelectedCity/SelectedCity";
import SavedCities from "./SavedCities/SavedCities";

const CityWeather = ({cityWeather, setCity, unsetCity, Cities, showCity, status}) => {

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

    return <div className="city_container">
    {   (status) ? <SavedCities cityWeather={cityWeather} addCity={addCity}/> : <div className="city_container_item_temp">Ничего не найдено</div>}
        <SelectedCity Cities={Cities} showDescription={showDescription} delCity={delCity}/>
    </div>
};

export default CityWeather;

