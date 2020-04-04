import { getData as getInitialData } from '../utils/api'
import { setAuthedUser } from './authedUser'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export default function handleInitialData (state) {
    return (dispatch) => {
        
        const { authorizedUser } = state
        
        dispatch(showLoading())

        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(authorizedUser !== undefined ? authorizedUser : null))
            dispatch(hideLoading())
        })
    }
}