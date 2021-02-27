import React from 'react'
import { Divider } from '@material-ui/core'

const Guidelines = () => {

    return (
        <div style={mainDiv}>
            <h2>Guidelines</h2>
            <Divider style={{height: '0.2rem', backgroundColor: 'black'}} /> <br />
            <div style={impLinks}>
                <h3>Guidelines for international arrivals</h3>
                <a style={{fontSize: '1.2rem'}} href="https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals17022021.pdf" target="_blank">https://www.mohfw.gov.in/pdf/Guidelinesforinternationalarrivals17022021.pdf</a>
            </div>
            <div style={impLinks}>
                <h3>SOP on preventive measures to contain spread of COVID-19 in offices</h3>
                <a style={{fontSize: '1.2rem'}} href="https://www.mohfw.gov.in/pdf/SOPonpreventivemeasurestocontainspreadofCOVID19inoffices.pdf" target="_blank">https://www.mohfw.gov.in/pdf/SOPonpreventivemeasurestocontainspreadofCOVID19inoffices.pdf</a>
            </div>
            <div style={impLinks}>
                <h3>COVID-19 Vaccination- A Guide for Healthcare and Front-line Workers</h3>
                <a style={{fontSize: '1.2rem'}} href="https://www.mohfw.gov.in/pdf/COVID19VaccinationGuideforEligibleBeneficiaries.pdf" target="_blank">https://www.mohfw.gov.in/pdf/COVID19VaccinationGuideforEligibleBeneficiaries.pdf</a>
            </div>
            <div style={impLinks}>
                <h3>FAQs for COVID-19 vaccinations</h3>
                <a style={{fontSize: '1.2rem'}} href="https://static.mygov.in/rest/s3fs-public/mygov_160985012951307401.pdf" target="_blank">https://www.mohfw.gov.in/pdf/COVID19VaccinationGuideforEligibleBeneficiaries.pdf</a>
            </div>
        </div>
    )
}

const mainDiv = {
    marginTop: '7rem'
}

const impLinks = {
    display: 'inline-block',
    marginTop: '2rem',
    margin: '1rem'
}

export default Guidelines
