import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home( {studio} ) {
    return (
        <div className='home cover flex justify-center'>
            <Link to='studio' className='home-link'>
                <div className='home__container mt6 tc items-center pt5 pt0-ns'>
                    <div className='home__heading pb6-ns f-headline-ns f2'>Sandbox</div>
                    <div className='home__studio mt7-ns f1-ns f3 pa3-ns pa2'>{ studio } Studio</div>
                </div>
            </Link>
        </div>
    )
}

export default Home