import * as axios from "axios";

const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

export const getCurrentPosWeather = (lat, lon) => {
    instance.get(`weather?lat=${lat}&lon=${lon}&appid=39f73c23d0938b6520d41447e49606a1`);
};

