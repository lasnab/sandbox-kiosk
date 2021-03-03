import { useState } from 'react'
import Loader from 'react-loader-spinner';
import './Reserve.css'

function Reserve({ reserve_url }) {
    const [iframe, setIframe] = useState(false)

    return (
        <div className='reserve'>
            <div className='reserve__heading'>Reserve Studio</div>
            { !iframe ? <Loader type='TailSpin' color='#ffffff' height={65} width={65}/>: null }
            <iframe src={reserve_url} onLoad={() => setIframe(true)} width="700" height="750" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    )
}

export default Reserve
