import {storageService} from './storageService.js'
import {makeId} from './utilService.js'

export const beerService = {
	query,
	save,
	remove,
	getById,
	getEmptyBeer,
	tryBeer,
}

const STORAGE_KEY = 'beers'

const gDefaultBeers = [
	{
		_id: 'r1',
		gate: 'A1 ',
		brewery: 'SIREN',
		beerName: 'CALYPSO',
		type: 'IPA',
		abv: 5,
		ibu: 35,
		untapped: 3.72,
		price: 16,
	},
	{
		_id: 'r2',
		gate: 'A2 ',
		brewery: 'SIREN',
		beerName: 'SOUNDWAVE',
		type: 'IPA',
		abv: 5,
		ibu: 35,
		untapped: 3.72,
		price: 16,
	},
	{
		_id: 'r3',
		gate: 'A3 ',
		brewery: 'SIREN',
		beerName: 'POMPO',
		type: 'IPA',
		abv: 5,
		ibu: 35,
		untapped: 3.72,
		price: 16,
	},
	{
		_id: 'r4',
		gate: 'A4 ',
		brewery: 'SIREN',
		beerName: 'MAMA',
		type: 'IPA',
		abv: 5,
		ibu: 35,
		untapped: 3.72,
		price: 16,
	},
]

var gBeers = _loadBeers()

function query(filterBy) {
	let beersToReturn = gBeers
	// console.log('gBeers:', gBeers)
	if (filterBy) {
		var {type, brewery, beerName} = filterBy
		beersToReturn = gBeers.filter(
			(beer) =>
				beer.type.toLowerCase().includes(type.toLowerCase()) &&
				beer.beerName.toLowerCase().includes(beerName.toLowerCase()) &&
				beer.brewery.toLowerCase().includes(brewery.toLowerCase())
		)
		// console.log('beersToReturn:', beersToReturn)
	}
	return Promise.resolve([...beersToReturn])
}
function tryBeer(id) {
	const beer = gBeers.find((beer) => beer._id === id)
	beer.batteryStatus -= 10
	return Promise.resolve()
}
function getById(id) {
	const beer = gBeers.find((beer) => beer._id === id)
	return Promise.resolve({...beer})
}

function remove(id) {
	const idx = gBeers.findIndex((beer) => beer._id === id)
	gBeers.splice(idx, 1)
	if (!gBeers.length) gBeers = gDefaultBeers.slice()
	storageService.store(STORAGE_KEY, gBeers)
	return Promise.resolve()
}

function save(beerToSave) {
	if (beerToSave._id) {
		const idx = gBeers.findIndex((beer) => beer._id === beerToSave._id)
		gBeers.splice(idx, 1, beerToSave)
	} else {
		beerToSave._id = makeId()
		gBeers.push(beerToSave)
	}
	storageService.store(STORAGE_KEY, gBeers)
	return Promise.resolve(beerToSave)
}

function getEmptyBeer() {
	return {
		gate: '',
		brewery: '',
		beerName: '',
		type: '',
		abv: '',
		ibu: '',
		untapped: '',
		price: '',
	}
}

function _loadBeers() {
	let beers = storageService.load(STORAGE_KEY)
	if (!beers || !beers.length) beers = gDefaultBeers
	storageService.store(STORAGE_KEY, beers)
	return beers
}
