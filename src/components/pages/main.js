import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {setStarships} from "../../actions"
import ListItem from "../list-item";
import Search from './search';

export default function Main({swapi}) { /*{match:{params:{page}}*/
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const  {page} = useParams();

    useEffect(()=>{
        setLoading(true);
        swapi.getStarships(page ? "/starships/?page="+page : undefined).then((result)=>{
            setLoading(false);
            dispatch(setStarships(result));
        });
    },[page]);

    return loading ? "Main loading..." : <><Search /><ListItem /></>;
}