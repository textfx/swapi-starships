export const setStarships = (ships)=>{
    return  {type: "SET_STARSHIPS", payload: ships}
};

export const setStarship = (results)=> {
    return  {type: "SET_STARSHIP", payload: results}
};


export const setStarshipsWrap = (url, setLoading, dispatch, swapi)=>{
    setLoading(true);
    swapi.getStarships(url).then((result)=>{
        setLoading(false);
        dispatch(setStarships(result));
    });
};

export const setStarshipWrap = (url, setLoading, dispatch, swapi)=>{
    setLoading(true);
    swapi.getStarship(url).then((result)=>{
        setLoading(false);
        dispatch(setStarship(result));
    });
};
