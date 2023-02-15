import { useEffect, useState } from "react";
import { BeerBrewery } from "./BeerBrewery";
import { BeerName } from "./BeerName";
import flipSlapSound from '../../assets/sounds/split-flap-sound.wav'


export function NameAndBrewery({ beer }) {
	const [newBeer, setBeer] = useState(beer);
	const play = () => {
		new Audio(flipSlapSound).play()
	}
	useEffect(() => {
		const intervalId = setInterval(() => {
			setBeer({ ...beer })
			play()
		}, Math.random() * 7200000);
		return () => clearInterval(intervalId);
	}, [beer]);



	return (
		<section className='n-and-b'>
			<BeerName beer={beer} />
			<BeerBrewery beer={beer} />
		</section>

	)
}
