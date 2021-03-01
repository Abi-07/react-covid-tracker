import React, { Fragment } from 'react'

const About = () => {
    return (
        <div className="top-container" style={about}>
            <h1>About COVID-19 Tracker app</h1><br/>
            <p>App to get the latest COVID-19 updates in India.</p><br/>
            <p>Uses data from <a href="https://www.mohfw.gov.in/data/datanew.json">https://www.mohfw.gov.in/data/datanew.json</a></p><br/>
            <p>Version: 1.0.0</p>
        </div>
    )
}

const about = {
    width: '100%',
    padding: '8%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
   
}

export default About
