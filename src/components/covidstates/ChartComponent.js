import React, { Component } from 'react'
import Chart from "react-google-charts";

export class ChartComponent extends Component {
    render() {
        const { state_name, new_active, new_cured, new_death } =  this.props.state

        let stateName = ''

        if(state_name === '') {
            stateName = 'National Data'
        } else {
            stateName = state_name
        }

        const data=[
            ['COVID', 'VALUE'],
            ['Active', parseInt(new_active)],
            ['Recovered', parseInt(new_cured)],
        ]

        if(data[1][1] === NaN) {
            return 0;
        }

        return (
            <Chart
                    width={'auto'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        title: `${stateName} - Confirmed Cases: ${parseInt(new_cured) + parseInt(new_active) + parseInt(new_death)}`,
                        pieHole: 0.4,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
        )
    }
}

export default ChartComponent
