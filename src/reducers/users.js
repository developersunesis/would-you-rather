import { RECEIVE_USERS, ADD_ANSWERED_QUESTION, ADD_USER_QUESTION } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWERED_QUESTION: 
            const { authedUser, qid, answer } = action
            const { answers } = state[authedUser]

            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers : {
                        ...answers,
                        [qid] : [answer]
                    }
                  }
            }

        case ADD_USER_QUESTION: 
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    questions : state[action.authedUser].questions.concat([action.id])
                }
            }
        default:
            return state
    }
}