import { heroes } from "../data/heroes";

export const getHeroesByPublished = ({ publisher }) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} publisher does not exists`)
    }

    return heroes.filter( hero => {
        return hero.publisher === publisher
    })
}