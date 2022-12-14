import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

function _AppHeader(props) {
	// console.log('_AppHeader -> props', props)
	return (
		<header className='app-header'>
			<section className='container'>
				<h1 className='logo'>Beers</h1>
				<section className='back'>
					<button onClick={props.history.goBack}>Back</button>
				</section>
				<nav>
					<NavLink exact to='/'>
						Home
					</NavLink>
					<NavLink to='/about'>About</NavLink>
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

