import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../../services/utilService'

export function BeerGate({ beer }) {

	return (
		<section className='beer-brewery'>

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
