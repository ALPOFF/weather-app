import React from "react";
import {geolocated} from "react-geolocated";
import "./WeatherContent.css"
import {usePosition} from "../../helpers/usePosition";

function WeatherContent() {
    const { latitude, longitude, error } = usePosition();

    return (
        <div className="content">
            <button >Get Your Pos</button>
            <button>Add City</button>
            <button>Delete City</button>
            <div>
                weather - {latitude},
                {longitude}
            </div>
        </div>
    )
}

export default WeatherContent;
