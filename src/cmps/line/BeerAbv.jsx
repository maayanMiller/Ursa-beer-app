// import {FlapDisplay, Presets} from 'react-split-flap-effect'
import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import { makeId } from '../../services/utilService'
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'

export function BeerAbv({ beer }) {

	// const [newBeer, setBeer] = useState(beer);
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
		<section className='beer-abv'>
			<FlapDisplay
				className=' cell-container'
				key={makeId()}
				beer={beer}
				padMode={'end'}
				chars={Presets.ALPHANUM + ",.!"}
				// value={``}
				// length={4}
				value={`${beer.abv}`}
			/>

			{/* <p>{beer.abv}</p> */}
		</section>

	)
}
