import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../../services/utilService'

export function BeerUntapped({ beer }) {

	return (
		<section className='beer-untapped'>
			<FlapDisplay
				className='cell-container name'
				key={makeId()}
				beer={beer}
				chars={Presets.ALPHANUM + ",.!"}
				padMode={'end'}
				// length={5}
				// value={``}
				value={`${beer.untapped}`}
			/>
		</section>

	)
}
