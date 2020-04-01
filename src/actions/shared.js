import { getData as getInitialData } from '../utils/api'
import { setAuthedUser } from './authedUser'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export default function handleInitialData () {
    return (dispatch, store) => {
        
        const { authorizedUser } = store

        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setAuthedUser(authorizedUser !== undefined ? authorizedUser : null))
        })
    }
}