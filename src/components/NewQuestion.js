import React from 'react'
import Nav, { NEW_QUESTION } from './Nav'
import { connect } from 'react-redux'
import { handleSaveQuestion, OPTION_ONE, OPTION_TWO } from '../actions/questions'

class NewQuestion extends React.Component {

    state = {
        optionOne : '',
        optionTwo : ''
    }

    setValue = (e, option) => {
        this.setState({
            ...this.state,
            [option] : e.target.value
        })
    }

    saveQuestion = () => {
        const { optionOne, optionTwo } = this.state

        if(optionOne.length === 0){
            alert("Please fill in the first option")
            return
        }

        if(optionTwo.length === 0){
            alert("Please fill in the second option")
            return
        }

        const { dispatch, authedUser }= this.props
        const question = {
            author : authedUser, 
            optionOneText : this.state.optionOne,
            optionTwoText : this.state.optionTwo
        }
        
        dispatch(handleSaveQuestion(question))

        this.setState({
            optionOne : '',
            optionTwo : ''
        })

        alert("Your poll has been added")
    }

    render() {
        
        return (
            <div>
                <Nav page={ NEW_QUESTION } />
                <div className='new-question-div'>
                    <h4>
                        Create A New Question
                    </h4>
                    <hr />
                    <h5>
                        Would you rather
                    </h5>
                    <div className="form-group">
                        <label>Option A</label>
                        <input type="text" className="form-control"
                        value={this.state.optionOne} 
                        onChange={(e) => this.setValue(e, OPTION_ONE)}/>
                    </div>
                    <div className="form-group">
                        <label>Option B</label>
                        <input type="text" className="form-control"
                        value={this.state.optionTwo}
                        onChange={(e) => this.setValue(e, OPTION_TWO)} />
                    </div>

                    <button type="button" className="btn btn-primary btn-sm save"
                    onClick={() => this.saveQuestion()}>Save Question</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ dispatch, authedUser }) {
    return {
        dispatch,
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)