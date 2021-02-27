import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


const StateItem = ({ state:  
    { state_name, new_active, new_cured }, index }) => {

        const classes = useStyles();

        const total = parseInt(new_active ) + parseInt(new_cured);
        const per = parseFloat(new_active/total)*100;


        return (
            // <div className="card text-center">
                <Paper className={classes.paper}>
                    <h3 style={stateName}>{state_name}</h3>
                    {per < 1.0 && new_active < 1000 ? <h5 className="text-success">Active: {new_active}</h5> :
                    <h5 className="text-danger">Active: {new_active}</h5> }
                    <Link to={`/state/${index}`}>
                        <Button style={{marginTop: '2%'}} variant="outlined" color="primary">More</Button>
                    </Link>
                </Paper>
                // {/* {state !== 'State Unassigned' >} */}
                
            // {/* </div> */}
        )
}

const stateName = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical'
}

StateItem.propTypes = {
    state: PropTypes.object.isRequired
}

export default StateItem
