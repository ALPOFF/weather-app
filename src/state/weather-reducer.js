import {getCitiesWeatherArr, getCityWeather, getCurrentPosWeather} from "../api/api";

const SET_WEATHER = 'SET_WEATHER';
const SET_CITY_WEATHER = 'SET_CITY_WEATHER';
const SET_NEW_CITY_VALUE = 'SET_NEW_CITY_VALUE';
const SET_CITY = 'SET_CITY';
const UN_SET_CITY = 'UN_SET_CITY';
const SHOW_CITY = 'SHOW_CITY';
const UPDATE_CITY_WEATHER = 'UPDATE_CITY_WEATHER'

let initialState = {
    weather: {weather: [], main: []},
    cityWeather: {weather: [], main: []},
    newCityValue: '',
    Cities: [],
    status: true
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
                cityWeather: action.payl,
                status: action.status,
                newCityValue: ''
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
        case UPDATE_CITY_WEATHER:
            return {
                ...state,
                Cities: action.idArr
            };
        case SHOW_CITY:
            let [selectedCity] = state.Cities.filter(c => c.id == action.id);
            return {
                ...state,
                cityWeather: selectedCity,
                status: true
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

export const setCityWeather = (payl, status) => {
    return {
        type: SET_CITY_WEATHER,
        payl,
        status
    }
};

export const setNewCityValue = (newCityValue) => {
    return {
        type: SET_NEW_CITY_VALUE,
        newCityValue
    }
};

export const updateCityWeather = (idArr) => {
    return {
        type: UPDATE_CITY_WEATHER,
        idArr
    }
};

export const getCityWeatherFunc = (city) => async (dispatch) => {
    try {
        let response = await getCityWeather(city);
        if (response.data.cod == 200) {
            dispatch(setCityWeather(response.data, true))
        }
    } catch (e) {
            console.log(e);
            dispatch(setCityWeather({weather: [], main: []}, false))
    }
 };

export const getWeatherFunc = (latitude, longitude) => async (dispatch) => {
    let response = await getCurrentPosWeather(latitude, longitude);
    dispatch(setWeather(response.data));
};


export const getNewCityWeatherData = (idArr) => async (dispatch) => {
    let response = await getCitiesWeatherArr(idArr);
    dispatch(updateCityWeather(response.data.list))
};

export default weatherReducer;

