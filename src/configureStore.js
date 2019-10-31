import {combineReducers, createStore} from "redux";
import weatherReducer from "./state/weather-reducer";

let reducers = combineReducers({
    weatherReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
