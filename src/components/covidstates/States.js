import React, { useContext } from 'react';
import StateItem from './StateItem';
import Spinner from '../layout/Spinner';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import CovidContext from '../../context/covid/covidContext';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));


const States = () => {
    const covidContext = useContext(CovidContext);
    const { loading,  states } = covidContext;

    const classes = useStyles();

    if(loading) {
        return <Spinner />
    }
    else {
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                {states.map((state, index) => state.state_name !== '' && state.state !== 'State Unassigned' && ( 
                    <Grid item xs={12} md={3} key={index}>
                        <StateItem key={state.statecode} state={state} index={index} />
                    </Grid>
                    // <div key={index} className="col-sm-12 col-md-4"><StateItem key={state.statecode} state={state} index={index} /></div>
                )
                )}
                </Grid>
            </div>
        )
    }
}


export default States
