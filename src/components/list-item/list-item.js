import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import styled, {keyframes} from 'styled-components';
import { zoomIn } from 'react-animations'

const Div = styled.div`
    li {
        background-color:#333;
        cursor: pointer;
        /* margin-bottom: 1rem;*/
    }
    a {
        color:yellow;  
    }
    >a{
        background-color:#000;
    }
    >a:hover{
        color:yellow;  
        background-color:#000;
    }
    animation: 0.1s ${keyframes `${zoomIn}`} ;
`;

const ErrorMasg = styled.div`
    color: red;
    font-size:20px;
    padding-top:20px;
    text-align:center;
`;


export default function ListItem({prefix}) {
    const state = useSelector((state)=>state.starships);

    const items = (state.results||[]).map((item)=> {
        return (
            <li key={item.id} className="list-group-item">
                <Link className="d-md-block" to={"/starship/"+item.id}>{item.name} <br />(model: {item.model})</Link>
            </li>
        );
    });

    if (!items.length)
        return <ErrorMasg>"Starships aren't found"</ErrorMasg>;

    return (<>
        <Div>
            <ul className="list-group">
                {items}
            </ul>

            <br />
            {state.previous ? <Link className="btn btn-dark float-left w-25 font-weight-bold" to={ (prefix ? prefix : "/page/") + state.previous}>Prev</Link> : null}
            {state.next ? <Link className="btn btn-dark float-right w-25 font-weight-bold " to={(prefix ? prefix :"/page/") + state.next}>Next</Link> : null}
        </Div>
    </>);
}