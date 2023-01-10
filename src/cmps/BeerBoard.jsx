

import { ABlock } from './ABlock'
import { BBlock } from './BBlock'
import { CBlock } from './CBlock'
import { DBlock } from './DBlock'
import { EBlock } from './EBlock'

export function BeerBoard({ beers }) {

	return (
		<section className='board'>
			<div className="flap-display-container">
				<div className="gate">GATE</div>
				<div className="cell-container">NAME</div>
				<div className="cell-container">TYPE</div>
				<div className="gate">ABV</div>
				<div className="gate">IBU</div>
				<div className="cell-container">UNTAPPED</div>
				<div className="cell-container">PRICE </div>
			</div>
			<ABlock beers={beers}></ABlock>
			<BBlock beers={beers}></BBlock>
			<CBlock beers={beers}></CBlock>
			<DBlock beers={beers}></DBlock>
			<EBlock beers={beers}></EBlock>
		</section>
	)
}
