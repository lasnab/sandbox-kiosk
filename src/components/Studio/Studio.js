import React from 'react'
import './Studio.css'
import { Link } from 'react-router-dom'

function Studio({ studio }) {
    return (
        <div className='studio cover'>
            <div className='studio__heading'>{ studio } Studio</div>
            <div className='studio__links'>
                <Link to='info' className='studio-option'>Studio Information</Link>
                <Link to='reserve' className='studio-option'>Reserve Studio</Link>
                <Link to='/' className='studio-option'>Checkout Tool</Link>
                <Link to='/' className='studio-option'>Return Tool</Link>
                <Link to='alltools' className='studio-option'>All Tools</Link>
                <Link to='tool' className='studio-option'>UID Information</Link>
                <Link to='/' className='studio-option'>Studio Experts</Link>
            </div>
        </div>
    )
}

export default Studio
