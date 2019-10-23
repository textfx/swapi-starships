import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {setStarshipWrap} from "../../actions";
import styled from 'styled-components';
import Spinner from "../spinner";

const Div = styled.div`
    td, th {
        color: yellow;
    }
`;

export default function StarShip({swapi}) { /*{match:{params:{id}}}*/
    const {id} = useParams();
    const state = useSelector((state)=>state.starship);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(()=>
        setStarshipWrap( (id ? id : undefined), setLoading, dispatch, swapi),[id, swapi, dispatch, setLoading]);

    if (loading)
        return <Spinner />;


    const headers = {
        name: "Name",
        model: "Model",
        manufacturer: "Manufacturer",
        costInCredits:  "Cost in Credits",
        length: "Length",
        maxSpeed: "Max Speed",
        crew: "Crew",
        passengers: "Passengers",
        cargoCapacity:"Cargo capacity",
        consumables: "Consumables",
        hyperdriveRating: "Hyperdrive Rating",
        MGLT: "MGLT",
        starshipClass: "Starship Class"
    };

    return (<>
        <Div>
            <img className="rounded mx-auto d-block pt-5 w-75" alt="Starships aren't found" src={state.img} /><br/>
            <table className="table">
                <tbody>
                {
                    Object.keys(state).map((key)=>{
                        if (!headers.hasOwnProperty(key))
                            return null;

                       return (
                            <tr key={key}>
                                <th scope="row">{headers[key]}</th>
                                <td>{state[key]}</td>
                            </tr>
                       );
                    })
                }
                </tbody>
            </table>
        </Div>
    </>);
}