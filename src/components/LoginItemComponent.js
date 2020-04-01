import React from 'react'

function UserLogin(props) {

    const { avatar, name, questions, onClick } = props

    return (
        <div className="user-login-div" 
        onClick={() => onClick()}>
            <div style={{
                display: 'inline-flex',
                cursor: 'pointer',
                width: '100%'
            }}>
                <img
                    src="https://github.com/developersunesis/would-you-rather/raw/master/public/1120.jpg"
                    className="avatar-sm" />
                <div style={{
                    marginTop: '7px',
                    marginLeft: "4px",
                    cursor: 'pointer',
                    width: '100%'
                }}>
                    <span style={{
                        fontSize: '0.9em'
                    }}><b>Username</b></span>
                    <p style={{
                        marginTop: '-2px',
                        padding: '0',
                        color: 'grey',
                        fontSize: '0.7em'
                    }}>Has 50 polls</p>
                </div>
            </div>
        </div>
    )
}

export default UserLogin