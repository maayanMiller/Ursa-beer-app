const INITIAL_STATE = {
	beers: null,
	filterBy: null
}

export function beerReducer(state = INITIAL_STATE, action) {
	switch (action.type)
	{
		case 'SET_BEERS':
			return {
				...state,
				beers: action.beers,
			}

		case 'ADD_BEER':
			return {
				...state,
				beers: [...state.beers, action.beer],
			}

		case 'REMOVE_BEER':
			return {
				...state,
				beers: state.beers.filter((beer) => beer._id !== action.beerId),
			}

		case 'UPDATE_BEER':
			return {
				...state,
				beers: state.beers.map((beer) =>
					beer._id === action.beer._id ? action.beer : beer
				),
			}
		case 'SET_FILTER_BY':
			return {
				...state,
				filterBy: { ...action.filterBy }
			}
		default:
			return state
	}
}
