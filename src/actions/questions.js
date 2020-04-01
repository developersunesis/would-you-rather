import { saveQuestion, saveQuestionAnswer } from '../utils/api'

export const SAVE_QUESTION = 'save_question'
export const SAVE_QUESTION_ANSWER = 'save_question_answer'
export const RECEIVE_QUESTIONS = 'receive_questions'

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
    return (dispatch, getCurrentState) => {
        const {authedUser} = getCurrentState()
        
        question.authedUser = authedUser

        return saveQuestion(question)
        .then((question) => dispatch(addQuestion(question)))
    }
}

export function handleSaveQuestionAnswer(info) {
    return (dispatch) => {
        return saveQuestionAnswer(info)
        .then(() => dispatch(addQuestionAnswer(info)))
    }
}