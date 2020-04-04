import React from 'react'
import { connect } from 'react-redux'
import User from './User'
import Nav, { BOARD } from './Nav'

function LeaderBoard(props) {

    return (
        <div>
            <Nav page={BOARD} />
            <div className="leaderboard-div">
                <ul>
                    {props.userIds.map((id) => (
                        <li className="leaders" key={id}>
                            <User id={id} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function mapStateToProps({ authedUser, users, questions }) {

    return {
        authedUser,
        userIds: Object.keys(users).sort((a, b) =>
            (users[a].questions.length + Object.keys(users[a].answers).length) -
            (users[b].questions.length + Object.keys(users[b].answers).length)
        ).reverse(),
        questions
    }
}

export default connect(mapStateToProps)(LeaderBoard)