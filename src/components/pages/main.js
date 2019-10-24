import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setStarshipsWrap} from "../../actions"
import ListItem from "../list-item";
import SearchInput from './search-input';
import Spinner from "../spinner";

export default function Main({swapi}) { /*{match:{params:{page}}*/
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const  {page} = useParams();

    //React Hook useEffect has missing dependencies: 'dispatch', 'page', and 'swapi'. Either include them or remove the dependency array
    //Приходится добавлять все внешние переменные в список.... [page, setLoading, dispatch, swapi] Буду рад услышать правильный паттерн для этой ситуации(((
    useEffect(()=>
        setStarshipsWrap(page ? "/starships/?page="+page : undefined, setLoading, dispatch, swapi),[page, setLoading, dispatch, swapi]);

    return loading ? <Spinner /> : <><SearchInput /><ListItem /></>;
}