import React from 'react';
import Swapi from "../../api";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import reducers from "../../reducers";
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'

import SearchInput from "../pages/search-input";
import Main from "../pages/main"
import StarShip from '../pages/starship'
import SearchPage from "../pages/search-page";

/*applyMiddleware(thunk)*/
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(combineReducers(reducers), composeWithDevTools());


export default function App() {
    const swapi = new Swapi();

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path={["/q/:search?","/q/:search?/page/:page?"]} exact component={()=><SearchPage swapi={swapi} />} />
                    <Route path={["/","/page/:page?"]} exact component={()=><Main swapi={swapi} />} />
                    <Route path="/" component={SearchInput} />
                </Switch>
                <Route path="/starship/:id" exact component={()=><StarShip swapi={swapi} />} />
            </Router>
        </Provider>
    );
}