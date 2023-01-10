// import {FlapDisplay, Presets} from 'react-split-flap-effect'
import { FlapDisplay, Presets } from 'earthtoday-react-split-flap-effect'
import { makeId } from '../services/utilService'

export function DBlock({ beers }) {
	return (
		<section className='d-block'>

			{beers.map((beer) => {
				if (beer.gate.startsWith('D'))
				{


					return (

						<div key={beer._id} className='flap-display-container'>
							<FlapDisplay
								className='cell-container darkBordered'
								key={makeId()}
								beer={beer}
								chars={Presets.ALPHANUM}
								minLength={6}
								timing={50}
								value={`${beer.gate}`} />

							<FlapDisplay
								className='cell-container'
								key={makeId()}
								beer={beer}
								chars={Presets.ALPHANUM}
								timing={100}
								value={`${beer.beerName}`} />

							<FlapDisplay
								className='cell-container'
								key={makeId()}
								beer={beer}
								chars={Presets.ALPHANUM}
								timing={80}
								value={`${beer.type}`} />

							<FlapDisplay
								className='cell-container'
								key={makeId()}
								beer={beer}
								chars={Presets.ALPHANUM}
								timing={60}
								value={`${beer.abv}`} />

							<FlapDisplay
								className='cell-container '
								key={makeId()}
								beer={beer}
								chars={Presets.ALPHANUM}
								timing={40}
								value={`${beer.ibu}`} />

							<FlapDisplay
								className='cell-container'
								key={makeId()}
								beer={beer}
								chars={Presets.ALPHANUM}
								timing={60}
								value={`${beer.untapped}`} />

							<FlapDisplay
								className='cell-container'
								key={makeId()}
								beer={beer}
								chars={Presets.ALPHANUM}
								timing={80}
								// length={13}
								value={`${beer.price} ₪`} />
						</div>


					)
				}
			}
			)}

		</section>

	)
}
