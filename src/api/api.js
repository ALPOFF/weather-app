import * as axios from "axios";

/*const instance =  axios.create({
    withCredentials: true,
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});*/

export const getCurrentPosWeather = (lat, lon) => {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=0097ac3e053179543aed6b60c11b6fec`);
};

