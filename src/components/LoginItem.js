import React from 'react'
import { connect } from 'react-redux'

function UserLogin(props) {

    const { id, onClick } = props

    const { avatarURL, name, questions } = props.users[id]

    return (
        <div className="user-login-div" 
        onClick={() => onClick()}>
            <div style={{
                display: 'inline-flex',
                cursor: 'pointer',
                width: '100%'
            }}>
                <img
                    src={avatarURL}
                    alt={`Author of ${name}`}
                    className="avatar-sm" />
                <div style={{
                    marginTop: '7px',
                    marginLeft: "4px",
                    cursor: 'pointer',
                    width: '100%'
                }}>
                    <span style={{fontSize: '0.9em'}}><b>{name}</b></span>
                    <p className="info">Has {questions.length} polls</p>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps({ users }){
    return {
        users
    }
}

export default connect(mapStateToProps)(UserLogin)