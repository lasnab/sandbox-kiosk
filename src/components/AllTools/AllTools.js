import React from 'react'
import './AllTools.css'
import ToolCard from '../ToolCard/ToolCard'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'; 

function AllTools( {alltools} ) {
    const [{}, dispatch] = useStateValue()

    return (
        <div className='alltools cover'>
            <div className='alltools__heading'>All Tools</div>
            <div className='alltools__cards'>
                { alltools.map((tool) => {
                    return (
                        <Link to='tool' onClick={() => dispatch({type:'SET_TOOL', tool:tool})}><ToolCard name={tool.tool_id} image={tool.image_url}/></Link>
                   )})
                }
            </div>
        </div>
    )
}

export default AllTools