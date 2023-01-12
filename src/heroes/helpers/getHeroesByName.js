import { cleanString } from "../../helpers/helpers";
import { heroes } from "../data/heroes";

export const getHeroesByName = ( name = '' ) => {
    name = cleanString(name);

    if ( name.length === 0 ) return [];

    return heroes.filter( 
        hero => cleanString(hero.superhero).includes(name) 
    )
}
