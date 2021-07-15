import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { getInitialData } from '../utils/functions';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export const handleInitialData = () => {
	return (dispatch) => {
		dispatch(showLoading());
		return getInitialData().then(({ users, questions }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveQuestions(questions));
			dispatch(hideLoading());
		});
	};
}
