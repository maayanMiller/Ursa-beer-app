import { Component } from 'react'
import { Link } from 'react-router-dom'
import { NiceButton } from '../cmps/NiceButton'
import { BeerFilter } from '../cmps/BeerFilter'
import { BeerList } from '../cmps/BeerList'
import { beerService } from '../services/beerService'
import { connect } from 'react-redux'
import { loadBeers, removeBeer, setFilterBy } from '../store/actions/beerActions'
import { BeerBoard } from '../cmps/BeerBoard'
import { ABlock } from '../cmps/ABlock'

class _BeerApp extends Component {

	async componentDidMount() {
		this.props.loadBeers()
		console.log('this.props:', this.props)
		console.log('	this.props:', this.props)
	}
	state = {
		isBoardOpen: false
	}

	// async loadBeers() {
	// 	try {
	// 		const beers = await beerService.query(this.state.filterBy)
	// 		this.setState({beers})
	// 	} catch (err) {
	// 		console.log('err:', err)
	// 	}
	// }

	onSelectBeerId = (beerId) => {
		this.setState({ selectedBeerId: beerId })
	}

	onRemoveBeer = async (beerId) => {
		// await beerService.remove(beerId)
		// this.loadBeers()
		this.props.removeBeer(beerId)
	}

	onChangeFilter = (filterBy) => {
		this.props.setFilterBy(filterBy)
		this.props.loadBeers()

	}

	render() {
		const { beers } = this.props
		if (!beers) return <div>Loading...</div>
		if (this.state.isBoardOpen) return <BeerBoard beers={beers} />


		return (
			<><div className='beer-app'>
				<BeerFilter onChangeFilter={this.onChangeFilter} />
				<Link to='/beer/edit'>Add Beer</Link>
				<h4 onClick={() => this.setState({ isBoardOpen: !this.state.isBoardOpen })}> board</h4>
				<ABlock beers={beers} />
				<BeerList
					history={this.props.history}
					onRemoveBeer={this.onRemoveBeer}
					beers={beers} />
			</div>
			</>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		beers: state.beerModule.beers,
	}
}

const mapDispatchToProps = {
	loadBeers,
	removeBeer,
	setFilterBy,
}

export const BeerApp = connect(mapStateToProps, mapDispatchToProps)(_BeerApp)
