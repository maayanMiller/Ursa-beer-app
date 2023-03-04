import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../../services/utilService'

export function BeerName({ beer }) {

	return (
		<section className='beer-name'>
			<FlapDisplay
				className='cell-container '
				key={makeId()}
				beer={beer}
				chars={Presets.ALPHANUM}
				padMode={'end'}
				// length={22}
				// value={``}
				value={`${beer.beerName}`}
			/>
		</section>

	)
}
