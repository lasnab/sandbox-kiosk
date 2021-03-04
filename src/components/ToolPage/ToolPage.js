import React, { useState, useEffect } from 'react'
import './ToolPage.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'; 

function ToolPage() {
    const [{ tool }, dispatch] = useStateValue()
    const { tool_id, description_url, image_url, training_url, drive_url } = tool
    
    return (
        <div className='toolpage cover'>
            <div className='toolpage__heading'>{tool_id}</div>
            <div className='toolpage__information'>
                <div className='toolpage__block'>
                    <div className='toolpage-description f3-ns'>
                        LorAnim sunt consectetur veniam elit sit reprehenderit ut consectetur velit est magna eu do. Adipisicing aliqua ut reprehenderit laboris incididunt veniam ipsum ut eiusmod id in. Cupidatat ea magna exercitation enim eu amet anim et dolore exercitation cillum ullamco elit quis. Cupidatat adipisicing ullamco ea dolor deserunt cillum.
                        LorAnim sunt consectetur veniam elit sit reprehenderit ut consectetur velit est magna eu do. Adipisicing aliqua ut reprehenderit laboris incididunt veniam ipsum ut eiusmod id in. Cupidatat ea magna exercitation enim eu amet anim et dolore exercitation cillum ullamco elit quis. Cupidatat adipisicing ullamco ea dolor deserunt cillum.
                    </div>
                    <img className='toolpage-image bg-white' src={image_url} alt={tool_id} width='500' height='auto' /> 
                </div>
                <div className='toolpage__actions'>
                    { 
                        training_url ? 
                        <div className='toolpage-action'>
                            <div className='f3 pb3'>ELMS Training</div>
                            <img className='' src={`https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=32b572&data=${training_url}`} width='175' alt='elms'/>
                        </div>
                        :
                        null
                    }

                    {
                        drive_url ? 
                        <div className='toolpage-action'>
                            <div className='f3 pb3'>Manual</div>
                            <img className='' src={`https://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=32b572&data=${drive_url}`}   width='175' alt='manual'/>
                        </div>
                        :
                        null
                    }
                    <Link to='/studio' className='toolpage-action toolpage-option'>Check Eligibility</Link>
                    <Link to='/studio' className='toolpage-action toolpage-option'>Reserve</Link>
                </div>
            </div>
        </div>
    )
}

export default ToolPage