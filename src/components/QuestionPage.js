import React, {Component, Fragment} from 'react'
import Answered from './Answered'
import NotAnswered from './NotAnswered'
import {connect} from 'react-redux'
class QuestionPage extends Component {
	render() {
		const { authedUserAnsweres, match } = this.props
		const id = match.params.id
		const answered = authedUserAnsweres.hasOwnProperty(id) ? true : false

		return(

			<Fragment>
				<h2 className="text-center my-3">
					<small>Would You Rather...</small>
				</h2>
				{answered ? <Answered id={id} /> : <NotAnswered id={id} />}
			</Fragment>

			)
	}
}

const mapStateToProps = ({ authedUser, users }) => {
	const authedUserAnsweres = users[authedUser].answers

	return {
		authedUserAnsweres
	}
}

export default connect(mapStateToProps)(QuestionPage)