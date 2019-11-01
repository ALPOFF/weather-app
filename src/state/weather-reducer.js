import {getCityWeather, getCurrentPosWeather} from "../api/api";

const SET_WEATHER = 'SET_WEATHER';
const SET_CITY_WEATHER = 'SET_CITY_WEATHER';
const SET_NEW_CITY_VALUE = 'SET_NEW_CITY_VALUE';
const SET_CITY = 'SET_CITY'


let initialState = {
    weather: {weather: [], main: []},
    cityWeather: {weather: [], main: []},
    xxx: 5,
    newCityValue: '',
    Cities: []
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {
                ...state,
                weather: action.payload
            };
        case SET_CITY_WEATHER:
            return {
                ...state,
                cityWeather: action.payl
            };
        case SET_NEW_CITY_VALUE:
            return {
                ...state,
                newCityValue: action.newCityValue
            };
        case SET_CITY:
            return {
                ...state,
                Cities: [...state.Cities, state.cityWeather]
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

export const setCity = () => {
    return {
        type: SET_CITY
    }
};

export const setCityWeather = (payl) => {
    return {
        type: SET_CITY_WEATHER,
        payl
    }
};

export const setNewCityValue = (newCityValue) => {
    return {
        type: SET_NEW_CITY_VALUE,
        newCityValue
    }
};

export const getCityWeatherFunc = (city) => async (dispatch) => {
    let response = await getCityWeather(city);
    dispatch(setCityWeather(response.data))
};

export const getWeatherFunc = (latitude, longitude) => async (dispatch) => {
    let response = await getCurrentPosWeather(latitude, longitude);
    dispatch(setWeather(response.data));
};

export default weatherReducer;
