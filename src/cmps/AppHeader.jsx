import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

function _AppHeader(props) {
	console.log('_AppHeader -> props', props)
	return (
		<header className='app-header full main-layout'>
			<section className='container'>
				<div className='logo'>
					<img alt='' src={require('../assets/imgs/beerLogo.png')}></img>
				</div>
				<nav>
					<NavLink exact to='/'>
						Home
					</NavLink>
					<NavLink to='/about'>About</NavLink>
					<NavLink to='/board'>Board</NavLink>
					<div onClick={props.history.goBack}>Back</div>
					{/* <div onClick={() => onOpenBoard()}>Board</div> */}
				</nav>
			</section>
		</header>
	)
}
const mapStateToProps = state => {
	return {
		loggedInUser: state.userModule.loggedInUser
	}
}
export const AppHeader = connect(mapStateToProps)(withRouter(_AppHeader))

