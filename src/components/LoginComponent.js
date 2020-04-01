import React from 'react'
import UserLogin from './LoginItemComponent'

function LoginComponent(props) {

    return (
        <div className="login-div">
            <h3 className="login-head center">
                <img src="" className="avatar"/>
                Would You Rather
            </h3>

            <p className="login-info">
                Let's get you signed in!
                <br/>
                Please select a user below
            </p>
            <ul className="bottom-border">
                <li>
                    <UserLogin onClick={props.itemClicked}/>
                </li>
                <li>
                    <UserLogin onClick={props.itemClicked}/>
                </li>
            </ul>
        </div>
    )
}

export default LoginComponent