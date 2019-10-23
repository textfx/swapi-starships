import React, {useState, useEffect} from 'react';
import {shallowEqual, useStore, useDispatch, useSelector} from "react-redux";

import {useReduxContext} from "react-redux/es/hooks/useReduxContext";
import {setStarships} from '../../actions';
import {BrowserRouter as Router, Link, useHistory, useParams} from "react-router-dom";
import Main from "../pages/main"
import StarShip from "./starship";

export default function Search({swapi}) { /*{history, match:{params:{search}}, */
    const history = useHistory();
    const {search} = useParams();

    const onSearch =  (e)=> {if (e.keyCode === 13) history.push(e.target.value === "" ? "/" : "/q/" + e.target.value);}

    return (
        <>
            <input type="text"  defaultValue={search} onKeyUp={onSearch}/>
        </>
    );
}