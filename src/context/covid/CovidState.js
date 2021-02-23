import React, { useReducer } from 'react'
import axios from 'axios'
import CovidContext from './covidContext' 
import CovidReducer from './covidReducer'
import { GET_STATES, GET_STATE, SET_LOADING } from '../types'


const CovidState = props => {
    const initialState = {
        states: [],
        stateData: {},
        loading: false
    }

    const [state, dispatch] = useReducer(CovidReducer, initialState)


    // Get All States
    const getStates = async () => {
        setLoading()
        const res = await axios.get('https://api.covid19india.org/data.json')
        const states = res.data.statewise
       dispatch({
           type: GET_STATES,
           payload: states
       })
      }

    // Get single state
    const getState = async (index) => {
        // getStates()
        setLoading()
        const res = await axios.get('https://api.covid19india.org/data.json')
        const states = res.data.statewise
        const singleState = states[index];
        dispatch({
            type: GET_STATE,
            payload: singleState
        })
      }

    // Set loading
    const setLoading = () => dispatch({ type: SET_LOADING })


    return <CovidContext.Provider 
         value={{
             states: state.states,
             stateData: state.stateData,
             loading: state.loading,
             getStates,
             getState
         }} >
             {props.children}
        </CovidContext.Provider>
}

export default CovidState