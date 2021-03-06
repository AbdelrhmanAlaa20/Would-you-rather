import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA.js'

export const getInitialData = () => {
	return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
		users,
		questions
	}))
}

export const saveQuestion = (question) => {
	return _saveQuestion(question)
}

export const saveQuestionAnswer = (info) => {
	return _saveQuestionAnswer(info)
}

export const date = (timestamp) => {
	const d = new Date(timestamp);
	const time = d.toLocaleTimeString('en-US');

	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString();
}
