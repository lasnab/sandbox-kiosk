
function ToolCard( {name, image} ) {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
            <img className='db ba b--black-10 bg-white' height='350' width='350' src={image} alt={name}/>
            <dl className='mt2 f6 lh-copy'>
                <dd className='b f3 near-black'>{name}</dd>
            </dl>
        </div>
    )
}

export default ToolCard
