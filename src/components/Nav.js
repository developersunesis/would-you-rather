import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

function logOut(e, props) {
    const { dispatch, history } = props

    e.preventDefault()
    dispatch(setAuthedUser(null))
    history.push("/")
}

function Nav(props) {

    const { page, authedUser, users } = props
    const { name, avatarURL } = users[authedUser]

    return (
        <div className="nav">
            <div className="nav-items">
                <img className="avatar-sm-2"
                    src={avatarURL}
                    alt={`Author of ${name}`} />
                <span>
                    Welcome <strong>{name}</strong>,
                </span>
                <button className="logout" onClick={(e) => logOut(e, props)}>
                    Logout
                </button>
            </div>
            <div className="nav-items">
                <Link className={(page === 0) ? "active" : ""} to="/">
                    Home
                </Link>
                <Link className={(page === 1) ? "active" : ""} to="/add">
                    New Question
                </Link>
                <Link className={(page === 2) ? "active" : ""} to="/leaderboard">
                    Leaderboard
                </Link>
            </div>
        </div>
    )
}

export const HOME = 0
export const NEW_QUESTION = 1
export const BOARD = 2
export const VIEW_POLL = 3

function mapStateToProps({ authedUser, users }) {
    return {
        authedUser,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Nav))