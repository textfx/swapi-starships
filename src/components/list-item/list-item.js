import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams, useRouteMatch, useLocation, useHistory}  from 'react-router-dom';
import {Link} from "react-router-dom";
import './list-item.css';
import styled from 'styled-components';


export default function ListItem({loading}) {
    const state = useSelector((state)=>state.starships);

    const items = (state.results||[]).map((item)=> {
       return (<li key={item.id}>
          <Link to={"/starship/"+item.id}>{item.name} <br />(model: {item.model})</Link>
              </li>)
    });


    return (<>

            <ul >
                {items}
            </ul>

        <br />
        {state.previous ? <Link  to={"/page/"+state.previous}>Prev</Link> : null} <br />
        {state.next ? <Link to={"/page/"+state.next}>Next</Link> : null}

    </>);
}