import { BeerPreview } from './BeerPreview'


export function BeerList({ beers, onRemoveBeer, history }) {
	// console.log('history:', history)

	return (
		<div className='beer-list simple-cards-grid'>
			{beers.map((beer) => (
				<BeerPreview key={beer._id} beer={beer} onRemoveBeer={onRemoveBeer} />
			))}
		</div>
	)
}
