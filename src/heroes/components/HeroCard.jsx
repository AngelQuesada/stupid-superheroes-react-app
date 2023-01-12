import { Link } from 'react-router-dom'


const CharactersByHero = ({ alter_ego, characters }) => {

    if ( alter_ego === characters ) return (<></>);

    return <p>{ characters }</p>
}


export const HeroCard = ({
        id,
        alter_ego,
        first_appearance,
        characters,
        superhero
    }) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`

    return (
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} alt={superhero} className="card-img animate__animated animate__fadeIn" />
                    </div>

                    <div className="col-8">
                        <div className="card-body">

                            <h5 className="card-title">
                                {superhero}
                            </h5>

                            <p>{ alter_ego }</p>
                            
                            <CharactersByHero alter_ego={alter_ego} characters={characters}/>
                                
                            <p className='card-text'>
                                <small className='text-muted'>{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Más información
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
