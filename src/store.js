import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const userInfo = Cookie.getJSON('userInfo') || null;
const teamInfo = Cookie.getJSON('teamInfo') || null;

const initialState = {};

const reducer = combineReducers({

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
