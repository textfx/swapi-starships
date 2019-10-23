import React, {useState, useEffect} from 'react';
import Swapi from "../../api";
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';
import reducers from "../../reducers";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider, useDispatch} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import Search from "../pages/search";
import Main from "../pages/main"
import StarShip from '../pages/starship'
import {setStarships} from "../../actions";
import SearchPage from "../pages/search-page";

/*applyMiddleware(thunk)*/
const store = createStore(combineReducers(reducers), composeWithDevTools());

export default function App() {
    const swapi = new Swapi(); /*<Route path="/" component={Search} />*/
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/q/:search?" exact component={()=><SearchPage swapi={swapi} />} />
                    <Route path={["/","/page/:page?"]} exact component={()=><Main swapi={swapi} />} />
                    <Route path="/" component={Search} />
                </Switch>
                <Route path="/starship/:id" exact component={()=><StarShip swapi={swapi} />} />
            </Router>
        </Provider>
    );
}