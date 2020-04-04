import React from 'react'
import Question from './Question'
import { connect } from 'react-redux'
import { ANSWERED_POLLS, UNANSWERED_POLLS } from '../actions/filterType'

class QuestionsComponent extends React.Component {

    filterQuestions = (questionIds) => {
        const { authedUser, type, questions } = this.props
        switch(type){
            case ANSWERED_POLLS:
                return questionIds.filter((id) => {
                    const { optionOne, optionTwo} = questions[id]
                    return optionOne.votes.includes(authedUser) || optionTwo.votes.includes(authedUser)
                })
            case UNANSWERED_POLLS:
                return questionIds.filter((id) => {
                    const { optionOne, optionTwo} = questions[id]
                    return !optionOne.votes.includes(authedUser) && !optionTwo.votes.includes(authedUser)
                })
            default:
                return questionIds
        }
    }

    render() {
        const filteredPoll = this.filterQuestions(this.props.questionIds)

        return (
            <div>
                {this.props.loading !== true ? (
                    (filteredPoll.length > 0) ? 
                        filteredPoll.map(
                            (id) => (
                                <Question key={id} qid={id}/>
                            )
                        )
                    : (
                        <div>
                            <br/>
                            <h5>You have no polls here.</h5>
                        </div>
                    ) 
                ) : null}
            </div>
        )
    }
}

function mapStateToProps({ authedUser, questions, users }) {

    return {
        loading: users === null,
        authedUser,
        questionIds: Object.keys(questions).reverse(),
        questions,
        users
    }
}

export default connect(mapStateToProps)(QuestionsComponent)