// import {FlapDisplay, Presets} from 'react-split-flap-effect'
import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import { makeId } from '../services/utilService'
import flipSlapSound from '../assets/sounds/split-flap-sound.wav'

export function Line({ beer }) {
	const [newBeer, setBeer] = useState(beer);
	const play = () => {
		new Audio(flipSlapSound).play()
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			setBeer({ ...beer })
			play()
		}, Math.random() * 1000000);
		return () => clearInterval(intervalId);
	}, [beer]);


	return (
		<section className='line'>

			<FlapDisplay
				className='cell-container '
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				minLength={6}
				timing={50}
				value={`${beer.gate}`} />

			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				timing={30}
				value={`${beer.beerName}`} />

			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				timing={30}
				value={`${beer.brewery}`} />
			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				timing={30}
				value={`${beer.type}`} />

			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				timing={50}
				value={`${beer.abv}`} />

			<FlapDisplay
				className='cell-container '
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				timing={40}
				value={`${beer.ibu}`} />

			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={beer}
				chars={Presets.ALPHANUM}
				timing={50}
				value={`${beer.untapped}`} />

			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={beer}
				chars={Presets.ALPHANUM}
				timing={50}
				// length={13}
				value={`${beer.price} ₪`} />
		</section>

	)
}
