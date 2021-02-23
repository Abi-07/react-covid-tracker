import React, { useEffect } from 'react'
import ChartComponent from '../covidstates/ChartComponent'
import ChartWorstFive from '../covidstates/ChartWorstFive'


const Total = ({ total, states }) => {

        const { 
            confirmed, 
            active, 
            recovered,
            deaths,
            lastupdatedtime
         } = total


        return (
            <div>
                <div className="container">
                    <div className="row" style={{textAlign: 'center'}}>
                        <div className="col"><h2>India's Covid Data</h2></div>
                        <div className="col">
                            <h2>Last updated</h2> <p>{lastupdatedtime}</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <ul className="flex-box" 
                            style={{ justifyContent: 'space-around'}}>
                                        <li className="text-primary totalLi">Active: { active }</li>
                                        <li className="text-success totalLi">Recovered: { recovered }</li>
                                        <li className="text-danger totalLi">Deaths: {deaths}</li>
                                    </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 flex-box">
                            <ChartWorstFive worstArray={states} />
                        </div>
                        <div className="col-md-6 col-12">
                            <ChartComponent state={total} />
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Total
