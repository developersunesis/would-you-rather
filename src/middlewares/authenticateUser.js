const authenticateUser = (store) => (next) => (action) => {
    const { authedUser } = store.getState()

    console.log(authedUser)
    
    return authedUser
}

export default authenticateUser