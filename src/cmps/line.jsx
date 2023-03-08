import { BeerAbv } from "./line/BeerAbv";
import { BeerBrewery } from "./line/BeerBrewery";
import { BeerGate } from "./line/BeerGate";
import { BeerIbu } from "./line/BeerIbu";
import { BeerName } from "./line/BeerName";
import { BeerPrice } from "./line/BeerPrice";
import { BeerType } from "./line/BeerType";
import { BeerUntapped } from "./line/BeerUntapped";
import { BreweryAndType } from "./line/BreweryAndType";
// import { NameAndBrewery } from "./line/NameAndBrewery";


export function Line({ beer }) {
	return (
		<section className='line'>
			<BeerGate beer={beer} />
			<BeerName beer={beer} ></BeerName>
			{/* <BeerBrewery beer={beer}></BeerBrewery> */}
			{/* <NameAndBrewery /> */}
			<BreweryAndType beer={beer} />
			{/* <BeerType beer={beer} /> */}
			<BeerAbv beer={beer} />
			<BeerIbu beer={beer} />
			<BeerUntapped beer={beer} />
			<BeerPrice beer={beer} />
			{/* <h1>{beer.gate}</h1>
			<h1>{beer.name}</h1> */}
		</section>

	)
}
