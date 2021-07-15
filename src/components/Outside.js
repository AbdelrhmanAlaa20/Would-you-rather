import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  {setAuthedUser}  from '../actions/authedUser'

class Outside extends Component {
	state = {
		error: ''
	};

	handleSubmit = (e) => {
		const user = this.user.value;
		const { dispatch } = this.props;

		e.preventDefault();

		if (user !== '') {
			dispatch(setAuthedUser(user));
		} else {
			this.setState({ error: 'Please, Choose a user' });
		}
	};

	render() {
		const { userNames } = this.props
		const { error } = this.state

		return (
			<Card bg="primary" className="text-center">
				<Card.Header>Login</Card.Header>
				<Card.Body>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="formGridState">
							<Form.Label>Choose</Form.Label>
							{error ? (
								<p className="text-danger">{error}</p>
							) : null}

							<Form.Control
								as="select"
								ref={(id) => (this.user = id)}
							>
								<option value="">Select</option>
								{userNames.map((item) => (
									<option value={item.value} key={item.value}>
										{item.label}
									</option>
								))}
							</Form.Control>
						</Form.Group>

						<Button type="submit" variant="outline-light">
							Login
						</Button>
					</Form>
				</Card.Body>
			</Card>

		)
	}
}

const mapStateToProps = ({ users }) => {
	return {
		userNames: Object.keys(users).map((id) => ({
			value: id,
			label: users[id].name
		}))
	}
}

export default connect(mapStateToProps)(Outside)
