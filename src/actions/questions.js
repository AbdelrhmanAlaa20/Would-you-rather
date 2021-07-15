import { saveQuestion, saveQuestionAnswer } from '../utils/functions';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

export const receiveQuestions = (questions) => {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

const addQuestion = (question) => {
	return {
		type: ADD_QUESTION,
		question
	};
}
const addAnswer = ({ qid, answer, authedUser }) => {
	return {
		type: ADD_ANSWER,
		answerInfo: {
			qid,
			answer,
			authedUser
		}
	};
}

//async action creators
export const handleAddQuestion = (optionOne, optionTwo)=> {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
				author: authedUser
		})
			.then((question) => dispatch(addQuestion(question)))
			.then(() => dispatch(hideLoading()));
	};
}

export const handleAddAnswer = (qid, answer) => {
	return (dispatch, getState) => {
		const { authedUser } = getState();

		dispatch(showLoading());

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		})
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authedUser
					})
				)
			)
			.then(() => dispatch(hideLoading()));
	};
}
