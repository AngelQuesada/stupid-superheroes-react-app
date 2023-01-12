import queryString from 'query-string';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers';

import { HeroCard } from '../components'


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = ''} = queryString.parse( location.search ); // Gets the query in the variable 'q'

    const heroes = getHeroesByName(q); // Gets the heroes filtered by the query

    const { searchText, onInputChange } = useForm({
        searchText: q
    });
    
    // Search Alert class names
    const searchAlertClassNames = classNames(
        'alert', 
        'alert-info',
        'animate__animated',
        'animate__fadeIn',
        {
            'd-none': q.length > 0 || heroes.length !== 0
        }
    )

    // No Results Alert class names
    const noResultsAlertClassNames = classNames(
        'alert', 
        'alert-danger',
        'animate__animated',
        'animate__fadeIn',
        {
            'd-none': q.length === 0 || heroes.length > 0
        }
    )

    const onSearchSubmit = (event) => {
        event.preventDefault();

        // This will add the query 'q' to the URL
        navigate(`?q=${ searchText }`)

    }

    return (
        <div className="container mt-5">
            <div className="row search-page">
                <h1>Search</h1>
                <hr />

                {/* Search Column */}
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />
                    
                    <form onSubmit={ onSearchSubmit }>
                        <input 
                            type="text" 
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            placeholder="Search a hero"
                            value= { searchText }
                            onChange= { onInputChange }
                        />

                        <button className='btn btn-outline-primary mt-2'>
                            Search
                        </button>
                    </form>
                </div>

                {/* Results Column */}
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div className={searchAlertClassNames}>
                        Search a hero
                    </div>

                    <div className={noResultsAlertClassNames}>
                        There's no here with <b>{ q }</b>
                    </div>

                    {
                        heroes.map( hero => (
                            <HeroCard key={hero.id} {...hero}/>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

