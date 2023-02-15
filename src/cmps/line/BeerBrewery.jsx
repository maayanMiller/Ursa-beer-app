import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import { makeId } from '../../services/utilService'
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'


export function BeerBrewery({ beer }) {

	const [newBeer, setBeer] = useState(beer);
	const play = () => {
		new Audio(flipSlapSound).play()
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			setBeer({ ...beer })
			play()
		}, Math.random() * 7200000);
		return () => clearInterval(intervalId);
	}, [beer]);


	return (
		<section className='beer-brewery'>
			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={newBeer}
				padMode={'end'}
				chars={Presets.ALPHANUM}
				// length={11}
				value={`${beer.brewery}`}
			// value={``}
			/>
		</section>

	)
}
