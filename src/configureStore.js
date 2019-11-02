import {applyMiddleware, combineReducers, createStore} from "redux";
import weatherReducer from "./state/weather-reducer";
import thunkMiddleware from "redux-thunk" //import thunkmiddleware

function saveToLocalStorage (state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {
        console.log(e)
    }
}

function loadFromLocalStorage () {
    try {
        const serializedState =  localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState)
    } catch(e) {
        console.log(e);
        return undefined
    }
}

const  persistedState = loadFromLocalStorage();

let reducers = combineReducers({
    weatherReducer
});

const store = createStore(reducers, persistedState, applyMiddleware(thunkMiddleware));

store.subscribe(() => saveToLocalStorage(store.getState()));

window.store = store;

export default store;
