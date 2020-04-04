import React from 'react'
import { connect } from 'react-redux'
import UserLogin from './LoginItemComponent'
import { setAuthedUser } from '../actions/authedUser'

class LoginComponent extends React.Component {

    authorizeUser = (id) => {
        const { dispatch } = this.props

        dispatch(setAuthedUser(id))

    }

    render() {

        const { userIds } = this.props

        return (
            <div className="login-div">
                <h3 className="login-head center">
                    <img alt="Logo" src="https://github.com/developersunesis/would-you-rather/raw/master/public/541.jpg" className="avatar" />
                    <br />Would You Rather
            </h3>

                <p className="login-info">
                    Let's get you signed in!
                <br />
                Please select a user below
            </p>
                <ul className="bottom-border">
                    {userIds.map((id) => (
                        <li key={id}>
                            <UserLogin id={id} onClick={() => this.authorizeUser(id)} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        userIds: Object.keys(users),
        questions
    }
}

export default connect(mapStateToProps)(LoginComponent)