import React from 'react'
import { OPTION_ONE, OPTION_TWO } from '../actions/questions'

function UnansweredPoll(props) {

    const { optionOne, optionTwo, qid } = props.info

    return (
        <div>
            <div className="question">
                <p className="question-option answer-me"
                    onClick={() => props.saveAnswer(qid, OPTION_ONE)}>
                    {optionOne.text}
                </p>
                or
                <p className="question-option answer-me"
                    onClick={() => props.saveAnswer(qid, OPTION_TWO)}>
                    {optionTwo.text}
                </p>
            </div>
            <br />
        </div>
    )
}

export default UnansweredPoll