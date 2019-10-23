import React,{useState, useEffect} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setStarship} from "../../actions";

export default function StarShip({swapi}) { /*{match:{params:{id}}}*/
    const {id} = useParams();
    const history = useHistory();
    const state = useSelector((state)=>state.starship);

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        setLoading(true);
        swapi.getStarship(id ? id : undefined).then((result)=>{
            setLoading(false);
            dispatch(setStarship(result));
        });
    },[id]);

    if (loading || state === null || !state)
        return (<div>Starship Detalis Loading... </div>);



   // const {img, name, model, manufacturer, costInCredits, length, maxSpeed, crew, passengers, cargoCapacity, consumables ,hyperdriveRating, MGLT, starshipClass} = state;


    return (<>
        <div>
            <img src={state.img} /><br/>
            Name: {state.name}<br/>
            Model: {state.model}<br/>
            Manufacturer: {state.manufacturer}<br/>
            Cost in Credits:  {state.costInCredits}<br/>
            Length: {state.length}<br/>
            Max Speed: {state.maxSpeed}
            Crew: {state.crew}<br/>
            Passengers: {state.passengers}<br/>
            Cargo Capacity: {state.cargoCapacity}<br/>
            Consumables: {state.consumables}<br/>
            Hyperdrive Rating: {state.hyperdriveRating} <br/>
            MGLT:{state.MGLT} <br/>
            Starship Class:{state.starshipClass} <br/>
        </div>
        <button onClick={()=>history.goBack()}>Back</button>
    </>);
}