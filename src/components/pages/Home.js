import React, { Fragment, useEffect, useContext } from 'react'
import States from '../covidstates/States'
import Total from '../pages/Total'

import CovidContext from '../../context/covid/covidContext'

const Home = () => {
    const covidContext = useContext(CovidContext)
    const { getStates } = covidContext
    useEffect(() => {
        getStates()
        console.log('Inside');
    }, [])

    return (
        <Fragment>
            {covidContext &&  <Total />}
            <States />
        </Fragment>
    )
}

export default Home
