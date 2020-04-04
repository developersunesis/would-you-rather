import React from 'react'
import { Link } from 'react-router-dom'

function AnsweredPoll(props) {

    const { optionOne, optionTwo, qid } = props.info
    
    return (
        <div>
            <div className="question">
                <p className="question-option">
                    {optionOne.text}
                </p>
                or
                <p className="question-option">
                    {optionTwo.text}
                </p>
            </div>


            <Link to={`questions/${qid}`}>
                <div className="question-action">
                    View Poll
                </div>
            </Link>
        </div>
    )
}

export default AnsweredPoll