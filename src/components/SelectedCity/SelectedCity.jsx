import React from "react";
import delete_icon from "../../assets/delete_icon.png";

let SelectedCity = ({Cities, showDescription, delCity}) => {
    return <div className="city_container_item_set">
        {Cities.map(c => <div className="cities">
            <img id={c.id} onClick={showDescription}
                 src="https://www.fortcollinsdogwizard.com/resources/info.png?timestamp=1507522652765" alt=""
                 height={25}/>
            <img id={c.id} src={delete_icon} alt="delete_icon" height={19} onClick={delCity}/>
            {c.name + " " +
            Math.ceil(c.main.temp)}°
        </div>)}
    </div>
};

export default SelectedCity;
