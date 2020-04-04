import { SAVE_QUESTION, SAVE_QUESTION_ANSWER, RECEIVE_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case SAVE_QUESTION:
            return {
                ...state,
                [action.question.id] : action.question
            }
        case SAVE_QUESTION_ANSWER:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                    ...state[action.qid][action.answer],
                    votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }
        default:
            return state
    }
}