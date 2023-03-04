import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../../services/utilService'


export function BeerPrice({ beer }) {
	return (
		<section className='beer-brewery'>
			<FlapDisplay
				className='cell-container name'
				key={makeId()}
				beer={beer}
				chars={Presets.ALPHANUM}
				padMode={'end'}
				// length={3}
				// value={``}
				value={`${beer.price}`}
			/>
		</section>

	)
}
