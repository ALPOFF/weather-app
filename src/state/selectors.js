export const getWeatherSelector = (state) => {
    return state.weatherReducer.weather
};

export const getNewCityValueSelector = (state) => {
    return state.weatherReducer.newCityValue
};

export const getCityWeatherSelector = (state) => {
    return state.weatherReducer.cityWeather
};

export const getCitiesSelector = (state) => {
    return state.weatherReducer.Cities
};
