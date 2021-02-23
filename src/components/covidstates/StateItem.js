import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const StateItem = ({ state:  
    { state, active }, index }) => {

    if(state !== 'Total' && state !== 'State Unassigned') {
        
    }
        return (
            <div className="card text-center">
                {/* {state !== 'State Unassigned' >} */}
                <h3>{state}</h3>
                {parseInt(active) < 1000 ? <h5 className="text-success">Active: {active}</h5> :
                <h5 className="text-danger">Active: {active}</h5> }

                <div>
                    <Link to={`/state/${index}`} className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        )
}

StateItem.propTypes = {
    state: PropTypes.object.isRequired
}

export default StateItem
