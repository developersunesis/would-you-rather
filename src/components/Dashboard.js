import React from 'react'
import Filter from '../filter-solid.svg'
import FilterOutline from '../filter-solid-outline.svg'
import { connect } from 'react-redux'
import QuestionsComponent from './QuestionsComponent'
import updateFilterType, { filterTitle, UNANSWERED_POLLS } from '../actions/filterType'
import Nav, { HOME } from './Nav'

class Dashboard extends React.Component {
    state = {
        // define the filter type required
        // default is -1 (for all types of questions)
        // 0 for answered questions
        // 1 for unanswered questions
        filterType: UNANSWERED_POLLS
    }

    filterPolls = () => {
        let filterType = updateFilterType(this.state.filterType)

        this.setState({
            filterType
        })
    }

    render() {
        const { filterType } = this.state

        return (
            <div>
                <Nav page={ HOME }/>
                <div className="dashboard">
                    <div className="dashboard-head">
                        <h3>
                            {filterTitle(filterType)}
                        </h3>
                        <img
                            onClick={() => this.filterPolls()}
                            src={filterType === UNANSWERED_POLLS ? FilterOutline : Filter}
                            alt="Filter Poll"
                        />
                    </div>
                    <p className="login-info">Use the filter button to toggle the polls<br/>(Answered Polls and Unanswered Polls)</p>
                    <QuestionsComponent type={filterType} />
                </div>
            </div>
        )
    }
}

export default connect()(Dashboard)