import { storageService } from './storageService.js'
import { makeId } from './utilService.js'

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
		gate: 'A1',
		brewery: 'Mikkeller',
		beerName: 'Iskold',
		type: 'Vienna lager',
		abv: 5.6,
		ibu: 0,
		untapped: 3.36,
		price:15,
	},
	{
		_id: 'r2',
		gate: 'A2',
		brewery: 'Beavertown',
		beerName: 'Solar Flame',
		type: 'Hazy DIPA',
		abv: 8,
		ibu: 0,
		untapped: 3.72,
		price: 33,
	},
	{
		_id: 'r3',
		gate: 'A3',
		brewery: 'Beavertown',
		beerName: 'Supermoon',
		type: 'Hazy IPA',
		abv: 6,
		ibu: 0,
		untapped: 3.61,
		price: 33,
	},
	{
		_id: 'r4',
		gate: 'A4',
		brewery: 'Mikkeller',
		beerName: 'Beer geek cocoa shake',
		type: 'Imperial Stout',
		abv: 12.1,
		ibu: 0,
		untapped: 4.11,
		price: 37,
	},{
		_id: 'r5',
		gate: 'A5',
		brewery: 'Mikkeller',
		beerName: 'Kaerlek',
		type: 'Hazy pale ale',
		abv: 4.9,
		ibu: 0,
		untapped: 3.49,
		price: 15,
	},{
		_id: 'r6',
		gate: 'A6',
		brewery: 'Brewdog',
		beerName: 'Double punk',
		type: 'DIPA',
		abv:8.2,
		ibu: 60,
		untapped: 3.71,
		price: 22,
	},{
		_id: 'r7',
		gate: 'A7',
		brewery: 'Kasteel',
		beerName: 'Bacchus',
		type: '',
		abv: '',
		ibu:'',
		untapped: '',
		price: 15,
	},{
		_id: 'r8',
		gate: 'A8',
		brewery: 'Mikkeller',
		beerName: 'HOD Syrax',
		type: 'Session IPA',
		abv: 3.5,
		ibu: 0,
		untapped: 3.44,
		price: 20,
	},{
		_id: 'r9',
		gate: 'A9',
		brewery: 'Mikkeller',
		beerName: 'Japanese',
		type: 'Rice Lager',
		abv: 5.1,
		ibu: 0,
		untapped:3.33,
		price: 16,
	},{
		_id: 'r10',
		gate: 'B1',
		brewery: 'Kasteel',
		beerName: 'Shoshan',
		type: 'Spiced',
		abv: 4.7,
		ibu: 0,
		untapped: 3.2,
		price:15,
	},{
		_id: 'r11',
		gate: 'B2',
		brewery: 'Mikkeller',
		beerName: 'Peter Pale and mary',
		type: 'Gluten free Pale Ale',
		abv: 4.6,
		ibu: 0,
		untapped: 3.6,
		price: 15,
	},{
		_id: 'r12',
		gate: 'B3',
		brewery: 'Brewdog',
		beerName: 'Basic Shake',
		type: 'Milkshake IPA',
		abv: 4.7,
		ibu: 20,
		untapped: 3.48,
		price: 15,
	},{
		_id: 'r13',
		gate: 'B4',
		brewery: 'Brewdog',
		beerName: 'Triple Agent',
		type: 'Oak aged triple',
		abv: 8.5,
		ibu: 0,
		untapped: 3.63,
		price: 15,
	},{
		_id: 'r14',
		gate: 'B5',
		brewery: 'Brewdog',
		beerName: 'Pupet Master',
		type: 'West coast IPA',
		abv: 6.5,
		ibu: 50,
		untapped:3.6,
		price: 21,
	},{
		_id: 'r15',
		gate: 'B6',
		brewery: 'Brewdog',
		beerName: 'Custom Shop',
		type: 'NEIPA',
		abv: 8,
		ibu: 0,
		untapped: 3.73,
		price: 16,
	},{
		_id: 'r16',
		gate: 'B7',
		brewery: 'Brewdog',
		beerName: 'Lost Guava',
		type: 'Lager',
		abv: 4.5,
		ibu: 20,
		untapped: 3.42,
		price: 15,
	},{
		_id: 'r17',
		gate: 'B8',
		brewery: 'Brewdog',
		beerName: 'Lost lyhee&lime',
		type: 'Lager',
		abv:4.5,
		ibu: 20,
		untapped:3.32,
		price: 15,
	},{
		_id: 'r18',
		gate: 'B9',
		brewery: 'Brewdog',
		beerName: 'Lost Blood orange',
		type: 'Lager',
		abv: 4.5,
		ibu: 20,
		untapped: 3.35,
		price: 15,
	},{
		_id: 'r19',
		gate: 'C1',
		brewery: 'Beavertown',
		beerName: 'Bloody hell',
		type: 'Blood Orange IPA',
		abv: 5.5,
		ibu: 40,
		untapped: 3.7,
		price: 19,
	},{
		_id: 'r20',
		gate: 'C2',
		brewery: 'Beavertown',
		beerName: 'Gamma ray',
		type: 'APA',
		abv: 5.4,
		ibu: 45,
		untapped: 3.75,
		price: 19,
	},{
		_id: 'r21',
		gate: 'C3',
		brewery: 'Beavertown',
		beerName: 'Neck oil',
		type: 'Session IPA',
		abv: 4.3,
		ibu:31,
		untapped:3.65,
		price:19,
	},{
		_id: 'r22',
		gate: 'C4',
		brewery: 'Beavertown',
		beerName: 'Lupuloid',
		type: 'IPA',
		abv: 6.7,
		ibu: 65,
		untapped: 3.8,
		price: 19,
	},{
		_id: 'r23',
		gate: 'C5',
		brewery: 'Siren',
		beerName: 'Calypso',
		type: 'Sour',
		abv: 4,
		ibu: 26,
		untapped: 3.51,
		price: 19,
	},{
		_id: 'r24',
		gate: 'C6',
		brewery: 'Siren',
		beerName: 'Broken Dream',
		type: 'Oatmeal stout',
		abv: 6.5,
		ibu: 0,
		untapped: 3.83,
		price: 19,
	},{
		_id: 'r25',
		gate: 'C7',
		brewery: 'Siren',
		beerName: 'Lumina',
		type: 'Session IPA',
		abv: 4.2,
		ibu: 0,
		untapped: 3.6,
		price: 19,
	},{
		_id: 'r26',
		gate: 'C8',
		brewery: 'Siren',
		beerName: 'Yu LU',
		type: 'SEssion IPA',
		abv: 3.6,
		ibu: 0,
		untapped:3.47,
		price: 19,
	},{
		_id: 'r27',
		gate: 'C19',
		brewery: 'Siren',
		beerName: 'Santo',
		type: 'DH Lager',
		abv: 5,
		ibu: 0,
		untapped: 3.58,
		price: 19,
	},{
		_id: 'r28',
		gate: 'D1',
		brewery: 'Brewdog',
		beerName: 'Hazy Jane Peach',
		type: 'NEIPA',
		abv: 5,
		ibu: 0,
		untapped: 3.61,
		price: 15,
	},{
		_id: 'r29',
		gate: 'D3',
		brewery: 'Brewdog',
		beerName: 'Hop Tiger',
		type: 'NEIPA',
		abv: 7.5,
		ibu: 0,
		untapped: 3.75,
		price: 15,
	},{
		_id: 'r30',
		gate: 'D2',
		brewery: 'Brewdog',
		beerName: 'Hazy Jane Peach',
		type: 'NEIPA',
		abv: 5,
		ibu: 20,
		untapped:3.73,
		price: 15,
	},{
		_id: 'r31',
		gate: 'D4',
		brewery: 'Beavertown',
		beerName: 'Beavertown',
		type: 'Hazy IPA',
		abv: 6.5,
		ibu: 0,
		untapped: 3.66,
		price: 33,
	},{
		_id: 'r32',
		gate: 'D5',
		brewery: 'Beavertown',
		beerName: 'Space Hulk',
		type: 'NEIPA',
		abv: 6,
		ibu: 0,
		untapped: 3.63,
		price:33,
	},{
		_id: 'r33',
		gate: 'D6',
		brewery: 'Mikkeller',
		beerName: 'Passion Pool',
		type: 'Sour Fruited Gose',
		abv:4.6,
		ibu:5,
		untapped: 3.84,
		price: 20,
	},{
		_id: 'r34',
		gate: 'D7',
		brewery: 'Siren',
		beerName: 'Castillien',
		type: 'Juicy Sour IPA',
		abv: 6.2,
		ibu: 0,
		untapped: 3.68,
		price: 33,
	},{
		_id: 'r35',
		gate: 'D8',
		brewery: 'Beavertown',
		beerName: 'Tropigamma',
		type: 'Tropical IPA',
		abv: 7,
		ibu: 60,
		untapped:3.94,
		price: 22,
	},{
		_id: 'r36',
		gate: 'D9',
		brewery: 'Siren',
		beerName: 'Futurist',
		type: 'Gluten free Session IPA',
		abv: 4.8,
		ibu: 0,
		untapped: 3.92,
		price: 28,
	},{
		_id: 'r37',
		gate: 'E1',
		brewery: 'Brewdog',
		beerName: '90 Days Bock',
		type: 'Amplified Lager',
		abv: 8,
		ibu: 0,
		untapped: 3.55,
		price: 15,
	},{
		_id: 'r38',
		gate: 'E2',
		brewery: 'Brewdog',
		beerName: '5AM Saint',
		type: 'American Red ale',
		abv: 5,
		ibu: 3.35,
		untapped: 3.63,
		price: 14,
	},{
		_id: 'r39',
		gate: 'E3',
		brewery: 'Brewdog VS Mikkeller',
		beerName: 'Urban Fog',
		type: 'NEIPA',
		abv: 6.5,
		ibu: 0,
		untapped: 3.74,
		price: 23,
	},{
		_id: 'r40',
		gate: 'E4',
		brewery: 'Brewdog',
		beerName: 'Candy Kittens',
		type: 'NEIPA',
		abv: 6,
		ibu: 29,
		untapped: 3.09,
		price:23,
	},{
		_id: 'r41',
		gate: 'E5',
		brewery: 'Brewdog',
		beerName: 'Way out West',
		type: 'West cost IPA',
		abv: 6.5,
		ibu: 40,
		untapped: 3.59,
		price: 23,
	},{
		_id: 'r42',
		gate: 'E6',
		brewery: 'Brewdog',
		beerName: 'Almost Famous',
		type: 'NEIPA',
		abv:6.8,
		ibu: 0,
		untapped: 3.75,
		price: 23,
	},{
		_id: 'r43',
		gate: 'E7',
		brewery: 'Kasteel',
		beerName: 'Nitro Rouge',
		type: 'Friut Beer',
		abv: 7,
		ibu: 8,
		untapped: 3.4,
		price: 17,
	},{
		_id: 'r44',
		gate: 'E8',
		brewery: 'Kasteel',
		beerName: 'Nitro Quad',
		type: 'Belgian Quad',
		abv:11,
		ibu: 0,
		untapped: 3.67,
		price: 17,
	},{
		_id: 'r45',
		gate: 'E9',
		brewery: 'Kasteel',
		beerName: 'Nitro Noir',
		type: 'Porter',
		abv: 5.7,
		ibu: 0,
		untapped: 3.32,
		price: 17,
	},
]

var gBeers = _loadBeers()

function query(filterBy) {
	let beersToReturn = gBeers
	// console.log('gBeers:', gBeers)
	if (filterBy)
	{
		var { type, brewery, beerName } = filterBy
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
	return Promise.resolve()
}
function getById(id) {
	const beer = gBeers.find((beer) => beer._id === id)
	return Promise.resolve({ ...beer })
}

function remove(id) {
	const idx = gBeers.findIndex((beer) => beer._id === id)
	gBeers.splice(idx, 1)
	if (!gBeers.length) gBeers = gDefaultBeers.slice()
	storageService.store(STORAGE_KEY, gBeers)
	return Promise.resolve()
}

function save(beerToSave) {
	if (beerToSave._id)
	{
		const idx = gBeers.findIndex((beer) => beer._id === beerToSave._id)
		gBeers.splice(idx, 1, beerToSave)
	} else
	{
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
