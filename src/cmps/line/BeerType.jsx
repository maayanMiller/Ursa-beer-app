import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import { makeId } from '../../services/utilService'
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'

export function BeerType({ beer }) {

	const [newBeer, setBeer] = useState(beer);
	// const play = () => {
	// 	new Audio(flipSlapSound).play()
	// }
	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		setBeer({ ...beer })
	// 		play()
	// 	}, Math.random() * 15000000);
	// 	return () => clearInterval(intervalId);
	// }, [beer]);

	return (
		<section className='beer-type'>
			<FlapDisplay
				className='cell-container name'
				key={makeId()}
				beer={newBeer}
				chars={Presets.ALPHANUM}
				padMode={'end'}
				// value={``}
				// length={26}
				value={`${beer.type}`}
			/>
		</section>

	)
}
