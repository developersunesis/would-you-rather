import React from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'
import { withRouter } from 'react-router-dom'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'

class Question extends React.Component {

    answeredPoll = () => {
        const { questions, qid, authedUser } = this.props
        const { optionOne, optionTwo } = questions[qid]

        return optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
    }

    handleSaveAnswerOption = (qid, answer) => {
        const { dispatch, authedUser, history } = this.props

        dispatch(handleSaveQuestionAnswer({ authedUser, qid, answer }))

        history.push(`/questions/${qid}`)
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
                            <AnsweredPoll info={{optionOne, optionTwo, qid}} />
                        ) :
                        (
                            <UnansweredPoll info={{optionOne, optionTwo, qid}} 
                            saveAnswer={this.handleSaveAnswerOption}/>
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

export default withRouter(connect(mapStateToProps)(Question))