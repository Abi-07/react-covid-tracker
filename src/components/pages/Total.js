import React, { useContext } from 'react';
import ChartComponent from '../covidstates/ChartComponent';
import ChartWorstFive from '../covidstates/ChartWorstFive';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CovidContext from '../../context/covid/covidContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const Total = () => {
    const covidContext = useContext(CovidContext);
    const { states, lastModified } = covidContext;

    const classes = useStyles();

    const total = states.length>0 ? states[states.length -1] : {};

        const { 
            new_active, 
            new_cured,
            new_death,
         } = total;

        return (
            <div className='top-container'>
                <div className={classes.root}>
                    <Grid container spacing={3} style={{textAlign: 'center'}}>
                        <Grid item xs={12} md={6}><h2>India's Covid Data</h2></Grid>
                        <Grid item xs={12} md={6}>
                            <h2>Last updated</h2> <p>{lastModified}</p>
                        </Grid>
                    </Grid>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <ul className="flex-box" 
                            style={{ justifyContent: 'space-around'}}>
                                        <li className="text-primary totalLi">Active: { new_active }</li>
                                        <li className="text-success totalLi">Recovered: { new_cured }</li>
                                        <li className="text-danger totalLi">Deaths: {new_death}</li>
                                        <li className="text-success totalLi">Vaccinated: 1,42,42,547</li>
                          </ul>
                    </Grid>
                </Grid>
                {/* <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <ChartWorstFive worstArray={states} />
                        </div>
                        <div className="col-md-6 col-12">
                            <ChartComponent state={total} />
                        </div>
                    </div>
                </div> */}
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <ChartWorstFive worstArray={states} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <ChartComponent state={total} />
                    </Grid>
                </Grid>
            </div>
        )
}

export default Total
