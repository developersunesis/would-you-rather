import React from 'react'
import { connect } from 'react-redux'
import { OPTION_ONE, OPTION_TWO } from '../actions/questions'
import { handleSaveQuestionAnswer } from '../actions/questions'
import { Link } from 'react-router-dom'

class Question extends React.Component {

    answeredPoll = () => {
        const { questions, qid, authedUser } = this.props
        const { optionOne, optionTwo } = questions[qid]

        return optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
    }

    handleSaveAnswerOption = (qid, answer) => {
        const { dispatch, authedUser } = this.props

        dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }))
    }

    render() {

        const { questions, users, qid } = this.props
        const { author, optionOne, optionTwo } = questions[qid]
        const { name, avatarURL } = users[author]
        const votesCount = optionOne.votes.length + optionTwo.votes.length

        return ((this.props.loading === true) ? null :
            <div className="question-div">
                <div className="question-author">
                    <img className="avatar"
                        src={avatarURL}
                        alt={`Author of ${name}`} />
                    <h3>{name}</h3>
                    <div className="votes-count">{votesCount} vote(s)</div>
                </div>
                <h3>
                 Would you rather
                </h3>

                {
                    this.answeredPoll() ?
                        (
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
                        ) :
                        (
                            <div>
                                <div className="question">
                                    <p className="question-option answer-me"
                                        onClick={() => this.handleSaveAnswerOption(qid, OPTION_ONE)}>
                                        {optionOne.text}
                                    </p>
                                    or
                                    <p className="question-option answer-me"
                                        onClick={() => this.handleSaveAnswerOption(qid, OPTION_TWO)}>
                                        {optionTwo.text}
                                    </p>
                                </div>
                                <br />
                            </div>
                        )
                }
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }) {
    return {
        loading: users === null,
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(Question)