import { Component } from 'react'
import { beerService } from '../services/beerService'

export class BeerEdit extends Component {
	state = {
		beer: null,
	}

	// inputRef = createRef()

	async componentDidMount() {
		const beerId = this.props.match.params.id
		const beer = beerId ? await beerService.getById(beerId) : beerService.getEmptyBeer()
		console.log('beer:', beer)
		this.setState({ beer }, () => {
			// this.inputRef.current.focus()
		})
	}

	handleChange = ({ target }) => {
		const field = target.name
		const value = target.type === 'number' ? +target.value || '' : target.value
		this.setState((prevState) => ({ beer: { ...prevState.beer, [field]: value } }))
	}

	onSaveBeer = async (ev) => {
		ev.preventDefault()
		await beerService.save({ ...this.state.beer })
		this.props.history.push('/')
	}

	inputRefFunc = (elInput) => {
		elInput && elInput.focus()
	}

	render() {
		const { beer } = this.state
		if (!beer) return <div>Loading...</div>

		return (
			<section className='beer-edit'>
				<h1>{beer._id ? 'Edit' : 'Add'} Beer</h1>
				<form onSubmit={this.onSaveBeer}>

					<section>
						<label htmlFor='gate'>Gate</label>
						<input
							ref={this.inputRefFunc}
							value={beer.gate}
							onChange={this.handleChange}
							type='text'
							name='gate'
							id='gate'
						/>{' '}
					</section>

					<section>
						<label htmlFor='beerName'>Name</label>
						<input
							ref={this.inputRefFunc}
							value={beer.beerName}
							onChange={this.handleChange}
							type='text'
							name='beerName'
							id='beerName'
						/>{' '}
					</section>
					<section>
						<label htmlFor='brewery'>Brewery</label>
						<select value={beer.brewery} onChange={this.handleChange} name='brewery' id='brewery'>
							<option disabled value=''>
								Choose a brewery
							</option>
							<option value='Mikkeller'>Mikkeller</option>
							<option value='BeaverTown'>BeaverTown</option>
							<option value='Thornbridge'>Thornbridge</option>
							<option value='BrewDog'>BrewDog</option>
							<option value='Kasteel'>Kasteel</option>
							<option value='Siren'>Siren</option>
							<option value='Lervig'>Lervig</option>
							<option value='Horizont'>Horizont</option>
						</select>
					</section>
					<section>
						<label htmlFor='supplier'>Supplier</label>
						<select value={beer.supplier} onChange={this.handleChange} name='supplier' id='supplier'>
							<option disabled value=''>
								Choose a Supplier
							</option>
							<option value='Ptoyrty'>Ptoyrty</option>
							<option value='Hacerem'>Hacerem</option>
							<option value='Redax'>Redax</option>
						</select>
					</section>
					<section>
						<label htmlFor='abv'>ABV</label>
						<input
							ref={this.inputRefFunc}
							value={beer.abv}
							onChange={this.handleChange}
							type='number'
							name='abv'
							id='abv'
						/>
					</section>

					<section>
						<label htmlFor='untapped'>Untapped</label>
						<input
							ref={this.inputRefFunc}
							value={beer.untapped}
							onChange={this.handleChange}
							type='number'
							name='untapped'
							id='untapped'
						/>{' '}
					</section>

					<section>
						<label htmlFor='ibu'>IBU</label>
						<input
							ref={this.inputRefFunc}
							value={beer.ibu}
							onChange={this.handleChange}
							type='number'
							name='ibu'
							id='ibu'
						/>
					</section>

					<section>
						<label htmlFor='cost'>cost</label>
						<input
							ref={this.inputRefFunc}
							value={beer.cost}
							onChange={this.handleChange}
							type='number'
							name='cost'
							id='cost'
						/>
					</section>

					<section>
						<label htmlFor='price'>Price</label>
						<input
							ref={this.inputRefFunc}
							value={beer.price}
							onChange={this.handleChange}
							type='number'
							name='price'
							id='price'
						/>
					</section>

					<section>
						<label htmlFor='type'>Type</label>
						<input
							ref={this.inputRefFunc}
							value={beer.type}
							onChange={this.handleChange}
							type='text'
							name='type'
							id='type'
						/>{' '}
					</section>

					<button>Save</button>
				</form>
			</section>
		)
	}
}
