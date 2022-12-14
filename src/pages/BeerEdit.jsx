import {Component} from 'react'
import {beerService} from '../services/beerService'

export class BeerEdit extends Component {
	state = {
		beer: null,
	}

	// inputRef = createRef()

	async componentDidMount() {
		const beerId = this.props.match.params.id
		const beer = beerId ? await beerService.getById(beerId) : beerService.getEmptyBeer()
		console.log('beer:', beer)
		this.setState({beer}, () => {
			// this.inputRef.current.focus()
		})
	}

	handleChange = ({target}) => {
		const field = target.name
		const value = target.type === 'number' ? +target.value || '' : target.value
		this.setState((prevState) => ({beer: {...prevState.beer, [field]: value}}))
	}

	onSaveBeer = async (ev) => {
		ev.preventDefault()
		await beerService.save({...this.state.beer})
		this.props.history.push('/')
	}

	inputRefFunc = (elInput) => {
		elInput && elInput.focus()
	}

	render() {
		const {beer} = this.state
		if (!beer) return <div>Loading...</div>

		return (
			<section className='beer-edit'>
				<h1>{beer._id ? 'Edit' : 'Add'} Beer</h1>
				<form onSubmit={this.onSaveBeer}>
					<label htmlFor='gate'>gate</label>
					<input
						ref={this.inputRefFunc}
						value={beer.gate}
						onChange={this.handleChange}
						type='text'
						name='gate'
						id='gate'
					/>{' '}
					<label htmlFor='beerName'>beerName</label>
					<input
						ref={this.inputRefFunc}
						value={beer.beerName}
						onChange={this.handleChange}
						type='text'
						name='beerName'
						id='beerName'
					/>{' '}
					<label htmlFor='brewery'>Brewery</label>
					<input
						ref={this.inputRefFunc}
						value={beer.brewery}
						onChange={this.handleChange}
						type='text'
						name='brewery'
						id='brewery'
					/>{' '}
					<label htmlFor='abv'>ABV</label>
					<input
						ref={this.inputRefFunc}
						value={beer.abv}
						onChange={this.handleChange}
						type='number'
						name='abv'
						id='abv'
					/>{' '}
					<label htmlFor='untapped'>untapped</label>
					<input
						ref={this.inputRefFunc}
						value={beer.untapped}
						onChange={this.handleChange}
						type='number'
						name='untapped'
						id='untapped'
					/>{' '}
					<label htmlFor='ibu'>IBU</label>
					<input
						ref={this.inputRefFunc}
						value={beer.ibu}
						onChange={this.handleChange}
						type='number'
						name='ibu'
						id='ibu'
					/>
					<label htmlFor='price'>price</label>
					<input
						ref={this.inputRefFunc}
						value={beer.price}
						onChange={this.handleChange}
						type='number'
						name='price'
						id='price'
					/>
					<label htmlFor='type'>Type</label>
					<select value={beer.type} onChange={this.handleChange} name='type' id='type'>
						<option disabled value=''>
							Choose a type
						</option>
						<option value='IPA'>IPA</option>
						<option value='lager'>lager</option>
						<option value='Amber Ale'>Amber Ale</option>
						<option value='lambic'>lambic</option>
					</select>
					<button>Save</button>
				</form>
			</section>
		)
	}
}
