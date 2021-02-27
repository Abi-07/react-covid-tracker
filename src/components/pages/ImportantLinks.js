import React, { Fragment } from 'react';
import { Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const ImportantLinks = () => {
    return (
        <div style={mainDiv}>
            <h2>Important Links</h2>
            <Divider style={{height: '0.2rem', backgroundColor: 'black'}} />
            <div style={impLinks}>
                <a style={{fontSize: '1.2rem'}} href="https://www.mohfw.gov.in/" target="_blank">https://www.mohfw.gov.in/</a>
            </div>
            <div style={impLinks}>
                <a style={{fontSize: '1.2rem'}} href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">https://www.who.int/emergencies/diseases/novel-coronavirus-2019</a>
            </div>
            <div style={impLinks}>
                <a style={{fontSize: '1.2rem'}} href="https://www.cdc.gov/coronavirus/2019-ncov/faq.html" target="_blank">https://www.cdc.gov/coronavirus/2019-ncov/faq.html</a>
            </div>
        </div>
      
    )
}

const mainDiv = {
    marginTop: '7rem'
}

const impLinks = {
    display: 'block',
    marginTop: '2rem'
}

export default ImportantLinks
