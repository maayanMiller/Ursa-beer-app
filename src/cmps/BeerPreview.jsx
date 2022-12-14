import {Link} from 'react-router-dom'

export function BeerPreview({beer, onRemoveBeer}) {
	const beerStyle = {backgroundImage: `url(https://robohash.org/${beer._id})`}
	return (
		<div style={beerStyle} className='beer-preview'>
			<Link to={`/beer/${beer._id}`} className='info'>
				<h2>{beer.beerName}</h2>
				<h4>{beer.brewery}</h4>
			</Link>
			<section className='actions'>
				<button onClick={() => onRemoveBeer(beer._id)}>Delete</button>
				<Link to={`/beer/edit/${beer._id}`}>Edit</Link>
			</section>
		</div>
	)
}
