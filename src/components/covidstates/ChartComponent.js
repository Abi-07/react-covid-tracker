import React, { Component } from 'react'
import Chart from "react-google-charts";

export class ChartComponent extends Component {
    render() {
        const { state, confirmed, active, recovered, deaths } =  this.props.state

        let stateName = ''

        if(state === 'Total') {
            stateName = 'National Data'
        } else {
            stateName = state
        }

        const data=[
            ['COVID', 'Data'],
            ['Active', parseInt(active)],
            ['Recovered', parseInt(recovered)],
        ]

        return (
            <Chart
                    width={'auto'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        title: `${stateName} - Confirmed Cases: ${confirmed}`,
                        pieHole: 0.3,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
        )
    }
}

export default ChartComponent
