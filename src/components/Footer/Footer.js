import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer({ studio }) {
    return (
        <div className='footer'> 
            <Link to='/' className='footer-link'>sandbox</Link>
            <Link to='studio' className='footer-link'>{ studio }</Link>            
        </div>
    )
}

export default Footer
