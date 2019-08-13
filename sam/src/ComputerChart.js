import React, { Component } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

export class ComputerChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Assigned", "Not Assigned", "Out of service"],
                datasets: [
                    {
                        label: 'Mac',
                        data: [//TODO FETCH DATA
                            47,
                            12,
                            56,

                        ],
                        backgroundColor: [
                            'rgba(236, 238, 133, 0.4)',
                            'rgba(255,89,0,0.4)',
                            'rgba(0,104,255,0.4)'


                        ]
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="Chart">
                <Doughnut
                    data={this.state.chartData}
                    width={300}
                    height={300}
                    options={{
                        title: {
                            display: true,
                            text: `${this.props.country} computers`,
                            fontSize: 25,
                            fontColor: "#fff"
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            fontColor: "#fff",
                            labels: {
                                display: true,
                                fontColor: "#fff",
                                fontSize: 10

                            }
                        },


                    }}
                />
            </div>
        )
    }
}

export default ComputerChart
