import React, { Fragment, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Navbar from './components/layout/Navbar'
import States from './components/covidstates/States'
import About from './components/pages/About'
import State from './components/covidstates/State'
import Total from './components/pages/Total'
import ImportantLinks from './components/pages/ImportantLinks'
import CovidState from './context/covid/CovidState'

import SideDrawer from './components/layout/SideDrawer'
import { makeStyles } from '@material-ui/core/styles'

import './App.css';
import Guidelines from './components/pages/Guidelines';
import Media from './components/pages/Media';





const App = () => {

  // const [ states, setStates ] = useState([])
  // const [ lastModified, setLastModified ] = useState('')
  // const [ state, setState ] = useState({})
  // const [ loading, setLoading ] = useState(false)
  


  useEffect(() => {
    // getStates()
    // eslint-disable-next-line
  }, [])

  // Get all states' data
  // const getStates = async () => {
  //   setLoading(true)
  //   const res = await axios.get('https://www.mohfw.gov.in/data/datanew.json')

  //   // console.log(res.data);

  //   setStates(res.data)

  //   setLastModified(res.headers["last-modified"]);
  //   setLoading(false)
  // }

  // // Get single state data
  // const getState = async (index) => {
  //   setLoading(true)
  //   const res = await axios.get('https://www.mohfw.gov.in/data/datanew.json')
  //   const states = res.data
  //   const singleState = states[index];
  //   console.log(singleState);
  //   setState(singleState)
  //   setLoading(false)
  // }

  const useStyles = makeStyles({
    container: {
      display: 'flex'
    }
  });  

  const classes = useStyles();
    return (
      <CovidState>
        <Router>
          <div className={`${classes.container}`}>
            <SideDrawer />
            {/* <Navbar /> */}
            <div className="container">
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Total />
                    <States  />
                    {/* {states[states.length -1] ? (<Total />) : ''}  */}
                    {/* <States loading={loading} states={states} total={states[0]} /> */}
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/state/:statecode' render={
                  props => (
                    <State { ...props } />
                  )} />
                <Route exact path='/links' component={ImportantLinks} />
                <Route exact path='/guidelines' component={Guidelines} />
                <Route exact path='/media' component={Media} />
              </Switch>
            </div>
          </div>
        </Router>
      </CovidState>
    )
}

export default App
