import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import ListItem from "../list-item";
import SearchInput from "./search-input";
import Spinner from '../spinner'
import {setStarshipsWrap} from '../../actions';


export default function SearchPage({swapi}) { /*{history, match:{params:{search}}, */
    const {search, page} = useParams();
    const dispatch  = useDispatch();
    const [loading, setLoading]  = useState(true);

    useEffect(()=>
        setStarshipsWrap( "/starships/?search="+(!page ? search : search+"&page="+page), setLoading, dispatch, swapi),[search, page, setLoading, dispatch, swapi]);

    if (loading)
        return <Spinner />;

    return (<>
            <SearchInput />
            <ListItem prefix={"/q/"+search+"/page/"} />
        </>);
}