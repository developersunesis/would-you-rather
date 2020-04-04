import React from 'react'
import { connect } from 'react-redux'
import Nav, { VIEW_POLL } from './Nav'
import Check from '../check-solid.svg'

function ViewPoll(props) {
    const {
        id,
        authedUser,
        questions,
        users
    } = props

    if (questions[id] === undefined) {
        return (
            <div>
                <Nav page={VIEW_POLL} />
                <h3>
                    This poll doesn't exist
                </h3>
            </div>
        )
    }

    const { author, optionOne, optionTwo } = questions[id]
    const { name, avatarURL } = users[author]
    const votesCount = optionOne.votes.length + optionTwo.votes.length

    let high
    let low

    if (optionOne.votes.length > optionTwo.votes.length) {
        high = optionOne
        low = optionTwo
    } else {
        high = optionTwo
        low = optionOne
    }

    const highPercentage = (high.votes.length / votesCount) * 100
    const lowPercentage = (low.votes.length / votesCount) * 100

    return (
        <div>
            <Nav page={VIEW_POLL} />
            <div className="question-div">
                <div className="question-author">
                    {(author !== authedUser) ?
                        <img className="avatar"
                            src={avatarURL}
                            alt={`Author of ${name}`} />
                        : null}
                    <h3>{(author === authedUser) ? "You asked:" : name.concat(" asked:")}</h3>
                </div>
                <h3>
                    Would you rather
                </h3>
                <div className="pl-4 pr-4 pb-4">
                    <p>
                        {high.votes.includes(authedUser) ?
                            <img src={Check} alt="check" height="25" className="mr-2" /> : null}
                        {high.text}
                    </p>

                    <div className="progress" style={{ height: "40px", marginTop: "-10px" }}>
                        <div className="progress-bar"
                            role="progressbar" style={{ width: `${highPercentage}%`, backgroundColor: "#4ac264" }}
                            aria-valuenow={highPercentage} aria-valuemin="0"
                            aria-valuemax="100">{((''.concat(highPercentage)).includes(".")) ? highPercentage.toFixed(2) : highPercentage}%</div>
                    </div>
                    <center><strong>{high.votes.length} of {votesCount} vote(s)</strong></center>

                    <br />
                    <p>
                        {low.votes.includes(authedUser) ?
                            <img src={Check} alt="check" height="25" className="mr-2" /> : null}
                        {low.text}
                    </p>

                    <div className="progress" style={{ height: "40px", marginTop: "-10px" }}>
                        <div className="progress-bar"
                            role="progressbar" style={{ width: `${lowPercentage}%`, backgroundColor: "#4ac264" }}
                            aria-valuenow={lowPercentage} aria-valuemin="0"
                            aria-valuemax="100">{((''.concat(lowPercentage)).includes(".")) ? lowPercentage.toFixed(2) : lowPercentage}%</div>
                    </div>
                    <center><strong>{low.votes.length} of {votesCount} vote(s)</strong></center>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ authedUser, questions, users }, props) {
    const { question_id } = props.match.params

    return {
        id : question_id,
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(ViewPoll)
