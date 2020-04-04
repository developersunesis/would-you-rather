import React from 'react'
import { connect } from 'react-redux'

function User(props) {

    const { id } = props

    const { avatarURL, name, questions, answers } = props.users[id]

    const answersLength = Object.keys(answers).length

    return (
        <div className="user-div">
            <div style={{display: 'inline-flex', width: '100%'}}>
                <img
                    src={avatarURL}
                    alt={`Author of ${name}`}
                    className="avatar-sm" />
                <div style={{
                    marginTop: '7px',
                    marginLeft: "4px",
                    marginBottom: "20px",
                    width: '100%'
                }}>
                    <span style={{
                        fontSize: '0.9em'
                    }}><b>{name}</b></span>
                    <p className="info">
                        Created {questions.length} questions <br/>
                        Answered {answersLength} questions
                    </p>
                </div>
                <div className="score">
                    {questions.length + answersLength}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        questions,
        users
    }
}

export default connect(mapStateToProps)(User)