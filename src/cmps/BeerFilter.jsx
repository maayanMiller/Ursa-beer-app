import {Component} from 'react'

export class BeerFilter extends Component {
	state = {
		brewery: '',
		type: '',
		price: '',
		beerName: '',
	}

	handleChange = ({target}) => {
		const field = target.name
		const value = target.type === 'number' ? +target.value || '' : target.value
		this.setState({[field]: value}, () => {
			this.props.onChangeFilter({...this.state})
		})
	}

	render() {
		const {brewery, type, price, beerName} = this.state
		return (
			<form className='beer-filter'>
				<section>
					<label htmlFor='brewery'>brewery</label>
					<input
						value={brewery}
						onChange={this.handleChange}
						type='text'
						name='brewery'
						id='brewery'
					/>
				</section>
				<section>
					<label htmlFor='type'>Type</label>
					<input
						value={type}
						onChange={this.handleChange}
						type='text'
						name='type'
						id='type'
					/>
				</section>
				<section>
					<label htmlFor='price'>price</label>
					<input
						value={price}
						onChange={this.handleChange}
						type='number'
						name='price'
						id='price'
					/>
				</section>
				<section>
					<label htmlFor='beerName'>beerName</label>
					<input
						value={beerName}
						onChange={this.handleChange}
						type='text'
						name='beerName'
						id='beerName'
					/>
				</section>
			</form>
		)
	}
}
