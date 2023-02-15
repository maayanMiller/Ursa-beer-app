import { Component } from 'react'

export class BeerFilter extends Component {
	state = {
		brewery: '',
		type: '',
		minPrice: '',
		maxPrice: '',
		beerName: '',
	}

	handleChange = ({ target }) => {
		const field = target.name
		const value = target.type === 'number' ? +target.value || '' : target.value
		this.setState({ [field]: value }, () => {
			console.log('this.state:', this.state)
			this.props.onChangeFilter({ ...this.state })
		})
	}

	render() {
		const { brewery, type, price, beerName } = this.state
		return (
			<form className='beer-filter'>
				<div className='beer-filter-container'>
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
						<label htmlFor='minPrice'> min price</label>
						<input
							value={price}
							onChange={this.handleChange}
							type='number'
							name='minPrice'
							id='minPrice'
						/>
					</section>
					<section>
						<label htmlFor='maxPrice'>max price</label>
						<input
							value={price}
							onChange={this.handleChange}
							type='number'
							name='maxPrice'
							id='maxPrice'
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
				</div>
			</form>
		)
	}
}
