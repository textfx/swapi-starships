import React, {useState, useEffect} from 'react';
import {shallowEqual, useStore, useDispatch, useSelector} from "react-redux";

import {useReduxContext} from "react-redux/es/hooks/useReduxContext";
import {setStarships} from '../../actions';
import ListItem from "../list-item";
import {BrowserRouter as Router, Link, useHistory, useParams} from "react-router-dom";
import Main from "../pages/main"
import StarShip from "./starship";
import Search from "./search";
import Spinner from '../spinner'

export default function SearchPage({swapi}) { /*{history, match:{params:{search}}, */
    const history = useHistory();
    const {search, page} = useParams();

    const dispatch  = useDispatch();
    const [loading, setLoading]  = useState(true);

    useEffect(() => {
        setLoading(true);
        swapi.searchStarships(!page ? search : search+"&page="+page).then((result) => {
            setLoading(false);
            dispatch(setStarships(result));
        });
    }, [search, page]);

    if (loading)
        return <Spinner />

    return (
        <>
            <Search />
            {search ? <ListItem prefix={"/q/"+search+"/page/"} /> : "Starships aren't found"}
        </>
    );
}