import React, { useEffect } from 'react'
import StateItem from './StateItem'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'


const States = ({ states, loading }) => {

    if(loading) {
        return <Spinner />
    }
    else {
        return (
            <div className="container">
                <div className="row">
                {states.map((state, index) => state.state !== 'Total' && state.state !== 'State Unassigned' && ( 
                    <div key={index} className="col-sm-12 col-md-4"><StateItem key={state.statecode} state={state} index={index} /></div>
                )
                )}
                </div>
            </div>
        )
    }
}

States.propTypes = {
    states: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}


export default States
