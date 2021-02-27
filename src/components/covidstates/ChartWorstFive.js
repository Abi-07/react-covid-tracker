import React, { Component } from 'react'
import Chart from "react-google-charts";

const ChartWorstFive = ( {worstArray} ) => {

    let ary = [...worstArray]

    ary.sort(function(a, b){return parseInt(a.active) - parseInt(b.active)});
    ary.reverse()
    ary.slice(1,5)


        let array = [['COVID', 'Data']]

        ary.map((element, index) => {
            if(index === 0) {
            }
            else if(index <= 5) {
                let ar = [element.state_name, parseInt(element.new_active)]
                array.push(ar)
            }
            else{
                return
            }
        });

        const data= array

        return (
            <Chart
                    width={'auto'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={data}
                    options={{
                        title: `Data for worst 5`,
                        pieHole: 0.3,
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
        )
}

export default ChartWorstFive
