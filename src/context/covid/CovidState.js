import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import CovidContext from './covidContext' 
import CovidReducer from './covidReducer'
import { GET_STATES, GET_STATE, SET_LOADING } from '../types'


const CovidState = props => {
    const initialState = {
        states: [],
        stateData: {},
        lastModified: '',
        loading: false
    }

    useEffect(() => {
        getStates();
    }, []);

    const [state, dispatch] = useReducer(CovidReducer, initialState)


    // Get All States
    const getStates = async () => {
        setLoading()
        const res = await axios.get('https://www.mohfw.gov.in/data/datanew.json')
       dispatch({
           type: GET_STATES,
           payload: res
       })
      }

    // Get single state
    const getState = async (index) => {
        // getStates()
        setLoading()
        const res = await axios.get('https://www.mohfw.gov.in/data/datanew.json')
        const states = res.data
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
             lastModified: state.lastModified,
             getStates,
             getState
         }} >
             {props.children}
        </CovidContext.Provider>
}

export default CovidState