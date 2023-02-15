import {beerService} from '../../services/beerService'

export function loadBeers() {
	return async (dispatch, getState) => {
		try {
			const {filterBy} = getState().beerModule
			console.log('filterBy:', filterBy)
			const beers = await beerService.query(filterBy)
			dispatch({type: 'SET_BEERS', beers})
		} catch (error) {
			console.log('error', error)
		}
	}
}
export function removeBeer(beerId) {
	return async (dispatch) => {
		try {
			const beer = await beerService.remove(beerId)
			dispatch({type: 'REMOVE_BEER', beerId})
			return beer
		} catch (err) {
			console.log('err:', err)
		}
	}
}
export function setFilterBy(filterBy) {
	return (dispatch) => {
		dispatch({type: 'SET_FILTER_BY', filterBy})
	}
}
