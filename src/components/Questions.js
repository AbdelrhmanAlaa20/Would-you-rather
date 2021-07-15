import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Question from './Question'

class Questions extends Component {

	render() {
		const {answeredIds, notAnsweredIds} = this.props
		return(
			<Fragment>
				<Tabs>
					<Tab eventKey="unanswered" title="Not Answered">
						<Fragment>
							<h2 className="text-center my-3">
								<small>Would You Rather...</small>
							</h2>
							{notAnsweredIds.length ? (
								notAnsweredIds.map((id) => <Question key={id} id={id} />)
							) : (
								<p className="text-center">You got no Questions here</p>
							)}
						</Fragment>
					</Tab>
					<Tab eventKey="answered" title="Answered">
						<Fragment>
							<h2 className="text-center my-3">
								<small>Would You Rather...</small>
							</h2>
							{answeredIds.length ? (
								answeredIds.map((id) => <Question key={id} id={id} />)
							) : (
								<p className="text-center">You got no Questions here</p>
							)}
						</Fragment>
					</Tab>
				</Tabs>
			</Fragment>
			)
	}
}

const mapStateToProps = ( {authedUser, users, questions} ) => {
	const answeredIds = Object.keys(questions)
		.filter ( (id) => users[authedUser].answers.hasOwnProperty(id) )
		.sort ( (a, b) => questions[b].timestamp - questions[a].timestamp)

		const notAnsweredIds = Object.keys(questions)
			.filter ( (id) => !users[authedUser].answers.hasOwnProperty(id))
			.sort ( (a, b) => questions[b].timestamp - questions[a].timestamp)

return {
	answeredIds,
	notAnsweredIds
}

}

export default connect(mapStateToProps)(Questions)