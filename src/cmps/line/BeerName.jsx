import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import { makeId } from '../../services/utilService'
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'

export function BeerName({ beer }) {

	const [newBeer, setBeer] = useState(beer);
	// const play = () => {
	// 	new Audio(flipSlapSound).play()
	// }
	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		setBeer({ ...beer })
	// 		play()
	// 	}, Math.random() * 3600000);
	// 	return () => clearInterval(intervalId);
	// }, [beer]);



	return (
		<section className='beer-name'>
			<FlapDisplay
				className='cell-container '
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				padMode={'end'}
				// length={22}
				// value={``}
				value={`${beer.beerName}`}
			/>
		</section>

	)
}
