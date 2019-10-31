import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherReducer from "./state/weather-reducer";
import thunkMiddleware from "redux-thunk" //import thunkmiddleware

let reducers = combineReducers({
    weatherReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
