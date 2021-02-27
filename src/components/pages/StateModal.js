import React from 'react';
import ChartComponent from '../covidstates/ChartComponent';
import { Grid, LinearProgress } from '@material-ui/core';


const StateModal = ({ state }) => {

        const {
            state_name, 
            new_active, 
            new_cured, 
            new_death,
        } = state

        const total = parseInt(new_active ) + parseInt(new_cured);
        const per = parseFloat(new_active/total)*100;

        var i=null
        if (!state) {
            console.log("Loading...");
            return (
                <div className="top-container">
                    <LinearProgress />
                </div>
            )
        }

        return (
            <div className="top-container" style={state}>
                {/* <Link to='/' className='btn btn-dark'>
                    Back To Home
                </Link> */}
                <h2>Performance: { ' ' }
                    { per < 1.0 && new_active < 1000 ? <i className="fas fa-check text-success" /> :
                    <i className="fas fa-times-circle text-danger"/>}
                  </h2> 
                <div style={{marginTop: '4rem', marginBottom: '4rem'}} className="container">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} className="flex-box" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                            <h1>{state_name}</h1><br />
                            <h3>Confirmed: {parseInt(new_active) + parseInt(new_cured) + parseInt(new_death)}</h3>
                           <br /><h3>Active: {new_active}</h3>
                           <br /> <h3>Recovered: {new_cured}</h3>
                           <br /> <h3>Deaths: {new_death}</h3>
                            {/* <h5>Migrated: {migratedother}</h5>
                            {statenotes && <h5>State notes: {statenotes}</h5>} */}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <ChartComponent state={state} />
                        </Grid>
                    </Grid>
                </div>
                
            </div>
        )
}

const state = {
    width: '100%',
    padding: '0 8% 0 8%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
   
}

export default StateModal;

