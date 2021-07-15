import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { reSetAuthedUser } from '../actions/authedUser'
import Avatar from './Avatar'
import Questions from './Questions'
import New from './New'
import LeaderBoard from './LeaderBoard'
import Page404 from './Page404'
import QuestionPage from './QuestionPage'

class Inside extends Component {
	render() {
	const { user, dispatch } = this.props

	const handleLogout = () => {
		dispatch(reSetAuthedUser())
	}

		return (
			<Router>
				<Fragment>
						<Navbar expand="lg" bg="light" variant="light" className="my-3 border">
							<Navbar.Brand as={Link} to="/">
								<h2>
								<small>Home</small>
								</h2>
							</Navbar.Brand>
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mr-auto">
									<Link to="/">
										<Button variant="outline-primary">Questions</Button>
									</Link>
									<Link to="/add">
										<Button variant="outline-primary">New</Button>
									</Link>
									<Link to="/leaderboard">
										<Button variant="outline-primary">Leader board</Button>
									</Link>
								</Nav>
								<Nav className="align-items-start">
									<Navbar.Text>{user.name}</Navbar.Text>
									<Avatar avatarURL={user.avatarURL} className="mx-3" />
									<Button
										variant="outline-primary"
										onClick={handleLogout}
										className="mt-3 mt-lg-0"
									>
										Logout
									</Button>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					<main> 	
						<Switch> 
		                <Route path="/" exact component={ Questions } /> 
						<Route path="/questions/:id" component={QuestionPage} />
		                <Route path = "/add" component={New} />
		                <Route path = "/leaderboard" component={LeaderBoard} />
		                <Route component={Page404} />
		              </Switch>			
					</main>					
				</Fragment>
		   	</Router> 

		)
	}
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	}
}

export default connect(mapStateToProps)(Inside)
