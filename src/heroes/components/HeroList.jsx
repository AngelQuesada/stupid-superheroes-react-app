import PropTypes from 'prop-types'
import { useMemo } from 'react';
import { getHeroesByPublished } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';


export const HeroList = publisher => {

    const allHeroes = useMemo( 
        () => getHeroesByPublished(publisher), 
        [publisher]
    );

    return (
        <div className='row rows-cols-1 row-cols-md-3 g3'>
            {
                allHeroes.map( hero => {
                    return (
                        <HeroCard 
                            key={ hero.id }
                            {...hero} 
                        />
                    )
                })
            }
        </div>
    )
}

HeroList.propTypes = {
    publisher: PropTypes.string.isRequired
}
