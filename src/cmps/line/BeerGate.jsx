import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { useEffect, useState } from 'react';
import { makeId } from '../../services/utilService'
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'

export function BeerGate({ beer }) {

	// const [newBeer, setBeer] = useState(beer);
	// const play = () => {
	// 	new Audio(flipSlapSound).play()
	// }
	// useEffect(() => {
	// 	const intervalId = setInterval(() => {
	// 		setBeer({ ...beer })
	// 		play()
	// 	}, Math.random() * 10800000);
	// 	return () => clearInterval(intervalId);
	// }, [beer]);


	return (
		<section className='beer-brewery'>
			{/* <div>
				<p>{beer.gate}</p>
			</div> */}
			<FlapDisplay
				className='cell-container name'
				key={makeId()}
				beer={beer}
				padMode={'end'}
				chars={Presets.ALPHANUM}
				// value={``}
				// length={3}
				value={`${beer.gate}`}
			/>
		</section>

	)
}
