import {getCityWeather, getCurrentPosWeather} from "../api/api";

const SET_WEATHER = 'SET_WEATHER';
const SET_CITY_WEATHER = 'SET_CITY_WEATHER';
const SET_NEW_CITY_VALUE = 'SET_NEW_CITY_VALUE';
const SET_CITY = 'SET_CITY';
const UN_SET_CITY = 'UN_SET_CITY';
const SHOW_CITY = 'SHOW_CITY'

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
        case UN_SET_CITY:
            return {
                ...state,
                Cities: state.Cities.filter(c => c.id != action.id)
            };
        case SHOW_CITY:
            let [selectedCity] = state.Cities.filter(c => c.id == action.id);
            return {
                ...state,
                cityWeather: selectedCity
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

export const unsetCity = (id) => {
    return {
        type: UN_SET_CITY,
        id
    }
};

export const showCity = (id) => {
    return {
        type: SHOW_CITY,
        id
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
