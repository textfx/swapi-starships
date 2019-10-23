import React, {useState, useEffect} from 'react';
import {shallowEqual, useStore, useDispatch, useSelector} from "react-redux";

import {useReduxContext} from "react-redux/es/hooks/useReduxContext";
import {setStarships} from '../../actions';
import {BrowserRouter as Router, Link, useHistory, useParams} from "react-router-dom";
import Main from "../pages/main"
import StarShip from "./starship";
import styled from 'styled-components'

const Div = styled.div`
    button, button:hover {
        color:yellow;
    }
    button:hover {
         background-color: #333;
    }
`;
export default function Search({swapi}) { /*{history, match:{params:{search}}, */
    const history = useHistory();
    const {search} = useParams();
    let searchInput;
    const onSearch =  ()=> { history.push(searchInput.value === "" ? "/" : "/q/" + searchInput.value);}

    return (
        <><Div>
            <div className="input-group  mb-1" >
                <div className="input-group-prepend">
                    <button type="button" className="btn btn-outline-secondary" onClick={()=>history.goBack()}>Back</button>
                </div>
                <input type="text" className="form-control" defaultValue={search} ref={input => searchInput = input} onKeyUp={(e)=>{if (e.keyCode === 13) onSearch()}}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={onSearch}>Search</button>
                </div>
            </div>
        </Div>
        </>
    );
}