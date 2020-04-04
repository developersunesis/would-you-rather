import React, { Fragment } from 'react';
import handleInitialData from '../actions/shared'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginComponent from './LoginComponent'
import Dashboard from './Dashboard'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import LoadingBar from 'react-redux-loading'
import ViewPoll from './ViewPoll';

class App extends React.Component {

  state = {
    currentUser: null
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData(this.state))
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {
            this.props.loading !== true ? (
              <div className="container">
                {
                  (this.props.authedUser === null) ?
                    <LoginComponent />
                    :
                    <div>
                      <Route path='/' exact component={Dashboard} />
                      <Route path='/leaderboard' component={LeaderBoard} />
                      <Route path='/add' component={NewQuestion} />
                      <Route path='/questions/:question_id' component={ViewPoll} />
                    </div>
                }
              </div>) : null
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser }) {

  return {
    loading: users === null,
    authedUser
  }
}

export default connect(mapStateToProps)(App);
