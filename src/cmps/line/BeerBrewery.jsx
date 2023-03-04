import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../../services/utilService'


export function BeerBrewery({ beer }) {


	return (
		<section className='beer-brewery'>
			<FlapDisplay
				className='cell-container'
				key={makeId()}
				beer={beer}
				padMode={'end'}
				chars={Presets.ALPHANUM}
				// length={11}
				value={`${beer.brewery}`}
			// value={``}
			/>
		</section>

	)
}
