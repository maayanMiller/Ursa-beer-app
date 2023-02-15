import { BeerAbv } from "./line/BeerAbv";
import { BeerGate } from "./line/BeerGate";
import { BeerIbu } from "./line/BeerIbu";
import { BeerPrice } from "./line/BeerPrice";
import { BeerType } from "./line/BeerType";
import { BeerUntapped } from "./line/BeerUntapped";
import { NameAndBrewery } from "./line/NameAndBrewery";

export function Line({ beer }) {
	return (
		<section className='line'>
			<BeerGate beer={beer} />
			<NameAndBrewery beer={beer} />
			<BeerType beer={beer} />
			<BeerAbv beer={beer} />
			<BeerIbu beer={beer} />
			<BeerUntapped beer={beer} />
			<BeerPrice beer={beer} />
		</section>

	)
}
