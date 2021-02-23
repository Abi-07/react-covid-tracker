import React, { Fragment, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import ChartComponent from './ChartComponent'
import Spinner from '../layout/Spinner'
import CovidContext from '../../context/covid/covidContext'


const State = ({ match }) => {
    const covidContext = useContext(CovidContext)
    const { loading,  stateData, getState } = covidContext

    useEffect(() => {
        getState(match.params.statecode)
        // eslint-disable-next-line
    }, [])

        const {
            state, 
            confirmed, 
            active, 
            recovered, 
            deaths,
            migratedother,
            statenotes
        } = stateData


        if (loading) return <Spinner />

        return (
            <Fragment>
                <Link to='/' className='btn btn-dark'>
                    Back To Home
                </Link>
                Performance: { ' ' }
                {active < 1000 ? <i className="fas fa-check text-success" /> :
                  <i className="fas fa-times-circle text-danger"/>}
                <div style={{marginTop: '4rem', marginBottom: '4rem'}} className="container">
                    <div className="row">
                        <div className="col-6">
                            <h3>{state}</h3>
                            <h5>Confirmed: {confirmed}</h5>
                            <h5>Active: {active}</h5>
                            <h5>Recovered: {recovered}</h5>
                            <h5>Deaths: {deaths}</h5>
                            <h5>Migrated: {migratedother}</h5>
                            {statenotes && <h5>State notes: {statenotes}</h5>}
                        </div>
                        <div className="col-6">
                            <ChartComponent state={stateData} />
                        </div>
                    </div>
                </div>
                
            </Fragment>
        )
}

export default State

