import { Component } from 'react'
import { Link } from 'react-router-dom'
import { beerService } from '../services/beerService'

export class BeerDetails extends Component {
	state = {
		beer: null,
	}

	async componentDidMount() {
		// console.log('mount')
		this.loadBeer()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.match.params.id !== this.props.match.params.id)
		{
			this.loadBeer()
		}
	}

	async loadBeer() {
		const beerId = this.props.match.params.id
		const beer = await beerService.getById(beerId)
		this.setState({ beer })
	}

	onBack = () => {
		this.props.history.push('/')
		// this.props.history.goBack()
	}

	render() {
		// console.log('render')
		const { beer } = this.state
		if (!beer) return <div>Loading...</div>
		return (
			<div className='beer-details'>
				<section>
					<h3>Beer Name: {beer.beerName}</h3>
				</section>
				<section>
					<h3>gate: {beer.gate}</h3>
				</section>
				<section>
					<h3>Type: {beer.type}</h3>
				</section>
				<section>
					<h3>supplier: {beer.supplier}</h3>
				</section>
				<section>
					<h3>ABV: {beer.abv}</h3>
				</section>
				<section>
					<h3>IBU: {beer.ibu}</h3>
				</section>
				<section>
					<h3>untapped: {beer.untapped}</h3>
				</section>
				<section>
					<h3>cost: {beer.cost}</h3>
				</section>
				<section>
					<h3>price: {beer.price}</h3>
				</section>
				<img src={require(`../assets/beersLogos/${beer.brewery}.png`)} alt='' />
				<button onClick={this.onBack}>Back</button>
				<Link to='/beer/r3'>Next Beer</Link>
			</div>
		)
	}
}
