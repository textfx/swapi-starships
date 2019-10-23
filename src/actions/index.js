/*export const prev = (swapi)=>()=>{
    return (dispatch) => {

    }
}

export const next = (swapi)=>()=>{
    return (dispatch) => {

    }
}*/

export const setStarships = (ships)=>{
    return  {type: "SET_STARSHIPS", payload: ships}
}

export const setStarship = (results)=> {
    return  {type: "SET_STARSHIP", payload: results}
}