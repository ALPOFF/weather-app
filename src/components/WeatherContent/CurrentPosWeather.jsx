import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import {NavLink} from "react-router-dom";

const CurrentPosWeather = ({latitude, longitude, getWeather, weather}) => {

    if (!weather.main.temp) {
        return <Preloader/>
    }

    let city = ["Moscow", "Sarov", "Spain"];
    return (
        <div className="content">
            <button >Add City</button>
            <button >Delete City</button>
            <div>
                <div>
                    weather : {weather.weather.map(t =>
                    <span>{t.description}</span>)} <br/>
                    temp : {Math.ceil(weather.main.temp)}
                </div>
            </div>
            <div>
                <nav>
                    {city.map(c => <NavLink to={'/cities/'+c}>{c}</NavLink>)}
                </nav>
            </div>
        </div>
    )
};

export default CurrentPosWeather;

