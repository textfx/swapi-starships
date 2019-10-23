export default class Swapi {

    _apiBase = 'https://swapi.co/api';
    _imgBase = 'https://starwars-visualguide.com/assets/img';

    get = async (url) => {
        const res = await fetch(this._apiBase+url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return await res.json();
    };

    /*get = async (url)=> {
        let res, count = 4;
        do {
            res = await fetch(this._apiBase+url);
            --count;
        } while (!res.ok && count>0);

        if (!res.ok)
            throw Error(`Could not fetch ${url}` + `, received ${res.status}`);

        return await res.json();
    };*/

    getStarships = async (url)=> {
        const json = await this.get(url ? url : "/starships/");
        return {
            ...json, ...this._extractPage(json),
            results: json.results.map(this._transformStarship)
        };
    }

    getStarship = async (id) => {
        const json = await this.get("/starships/"+id);
        return this._transformStarship(json);
    }

    _getStarshipImage = (id) => {
        return `${this._imgBase}/starships/${id}.jpg`
    };

    searchStarships = async (search) =>{
        return await this.getStarships("/starships/?search="+search);
    }

    _extractId = (item) => {
        return item.url.match(/\/([0-9]*)\/$/)[1];
    };
    _extractPage = ({next, previous}) => {
        const reg = /page=([0-9]+)$/;
        return {
            next : next ? next.match(reg)[1] : null,
            previous : previous ? previous.match(reg)[1] : null
        };
    };
    _transformStarship = (starship) => {
        //console.log(starship);
        const id = this._extractId(starship);
        return {
            id: id,
            img: this._getStarshipImage(id),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            maxSpeed: starship.max_atmosphering_speed,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
            consumables: starship.consumables,
            hyperdriveRating: starship.hyperdrive_rating,
            MGLT: starship.MGLT,
            starshipClass: starship.starship_class
        }
    }

}

const swapi  = new Swapi();
/*swapi.getStarship(12).then((value => {console.log(swapi.getStarshipImage(value))}));*/
//console.log("swapi", swapi.getStarshipImage(13));
/*swapi.searchStarships("X-wing").then(value => (console.log(value)));*/