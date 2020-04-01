import React from 'react';
import handleInitialData from '../actions/shared'
import { connect } from 'react-redux'

import LoginComponent from './LoginComponent'

class App extends React.Component {

  state = {
    currentUser : null
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  signInUser(){
    console.log("Clicked sign in")
  }

  render() {
    return (
      <div className="container">
        <LoginComponent itemClicked={this.signInUser}/>
      </div>
    );
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
