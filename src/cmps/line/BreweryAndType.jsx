import { useEffect, useState } from "react";
import { BeerBrewery } from "./BeerBrewery";
import { BeerName } from "./BeerName";
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'
import { BeerType } from "./BeerType";


export function BreweryAndType({ beer }) {
	const [newBeer, setBeer] = useState(beer);
	const play = () => {
		new Audio(flipSlapSound).play()
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			setBeer({ ...beer })
			play()
		}, Math.random() * 15000000);
		return () => clearInterval(intervalId);
	}, [beer]);



	return (
		<section className='n-and-b'>
			<BeerBrewery beer={beer} />
			<BeerType beer={beer} />
		</section>

	)
}
