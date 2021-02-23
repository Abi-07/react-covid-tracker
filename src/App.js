import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import States from './components/covidstates/States'
import About from './components/pages/About'
import State from './components/covidstates/State'
import Total from './components/pages/Total'

import SideDrawer from './components/layout/SideDrawer';

import CovidState from './context/covid/CovidState'

import './App.css';

const App = () => {

  const [ states, setStates ] = useState([])
  const [ state, setState ] = useState({})
  const [ loading, setLoading ] = useState(false)


  useEffect(() => {
    getStates()
    // eslint-disable-next-line
  }, [])

  // Get all states' data
  const getStates = async () => {
    setLoading(true)
    const res = await axios.get('https://api.covid19india.org/data.json')

    setStates(res.data.statewise)
    setLoading(false)
  }

  // Get single state data
  const getState = async (index) => {
    setLoading(true)
    const res = await axios.get('https://api.covid19india.org/data.json')
    const states = res.data.statewise
    const singleState = states[index];
    setState(singleState)
    setLoading(false)
  }

    return (
      <CovidState>
        <Router>
          <div className="App">
            <SideDrawer />
            {/* <Navbar /> */}
            <div className="container">
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    {states[0] ? (<Total total={states[0]} states={states} />) : ''} 
                    <States loading={loading} states={states} total={states[0]} />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/state/:statecode' render={
                  props => (
                    <State { ...props } getState={getState} stateData={state} loading={loading} />
                  )} />
              </Switch>
            </div>
          </div>
        </Router>
      </CovidState>
    )
}

export default App
