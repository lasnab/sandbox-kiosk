import { useState } from 'react'
import Loader from 'react-loader-spinner';
import './Info.css'

function Info({ studio, studio_wiki }) {
    const [iframe, setIframe] = useState(false)
    return (
        <div className='info'>
            <div class='info__heading'>{` ${studio} `}Information</div>
            { !iframe ? <Loader type='TailSpin' color='#ffffff' height={65} width={65}/>: null }
            <iframe src={studio_wiki} onLoad={() => setIframe(true)} width='1000' height='800' frameborder='0' marginheight='0' marginwidth='0'>Loading…</iframe>  
        </div>
    )
}

export default Info