import { Switch } from 'react-router-dom'
import { GET_STATES, GET_STATE, SET_LOADING } from '../types'

export default (state, action) => {
    switch(action.type) {
        case GET_STATES:
            return {
                ...state,
                states: action.payload.data,
                lastModified: action.payload.headers["last-modified"],
                loading: false
            }
        case GET_STATE:
            return {
                ...state,
                stateData: action.payload,
                loading: false
            }
        default:
            return state
    }
}