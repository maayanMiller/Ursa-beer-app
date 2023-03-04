import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../../services/utilService'

export function BeerAbv({ beer }) {
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
