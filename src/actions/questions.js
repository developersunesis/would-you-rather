import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { addUserQuestion, addUserAnsweredQuestion } from './users'

export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

const addQuestion = (question) => ({
    type: SAVE_QUESTION,
    question
})

const addQuestionAnswer = ({authedUser, qid, answer}) => ({
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
})

export const receiveQuestions = (questions) => ({
    type : RECEIVE_QUESTIONS,
    questions
})

export function handleSaveQuestion(question) {
    return (dispatch) => {
        return saveQuestion(question)
        .then((question) => {
            const { author, id } = question
            dispatch(addUserQuestion({ author, id }))
            dispatch(addQuestion(question))
        })
    }
}

export function handleSaveQuestionAnswer(info) {
    return (dispatch) => {
        return saveQuestionAnswer(info)
        .then(() => {
            dispatch(addQuestionAnswer(info))
            dispatch(addUserAnsweredQuestion(info))
        })
    }
}

export const OPTION_ONE = "optionOne"
export const OPTION_TWO = "optionTwo"