import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'
import { makeId } from '../../services/utilService'

export function BeerName({ beer }) {
	const [newBeer, setBeer] = useState(beer);
	const play = () => {
		new Audio(flipSlapSound).play()
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			setBeer({ ...beer })
			play()
		}, Math.random() * 15000000);
		return () => clearInterval(intervalId);
	}, [beer]);


	return (
		<section className='beer-name'>
			<FlapDisplay
				className='cell-container '
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM + ",.!&"}
				padMode={'end'}
				// length={44}
				// value={``}
				value={`${beer.beerName}`}
			/>
		</section>

	)
}
