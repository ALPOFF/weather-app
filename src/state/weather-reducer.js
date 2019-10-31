import {getCurrentPosWeather} from "../api/api";

const SET_WEATHER = 'SET_WEATHER'

let initialState = {
    weather: {weather: []},
    currentLat: null,
    currentLng: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_WEATHER:
            return {
                weather: action.payload
            };
        default:
            return state
    }
};

export const setWeather = (payload) => {
    return {
        type: SET_WEATHER,
        payload
    }
};

export const getWeatherFunc = (latitude, longitude) => async (dispatch) => {
    let response = await getCurrentPosWeather(latitude, longitude);
    dispatch(setWeather(response.data));
};

export default weatherReducer;
