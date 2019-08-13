import React, { Component } from 'react';
import { Doughnut, Pie, Bar } from 'react-chartjs-2';

export class UnassignedPeripheralChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["Keyboard", "Mac charger", "Mouse", "Network adapters", "Platronic headphones", "iPhone headphones"],
                datasets: [
                    {
                        label: 'Unassigned Peripherals',
                        data: [//TODO FETCH DATA
                            47,
                            12,
                            56,
                            82,
                            19,
                            20
                        ],
                        backgroundColor: [
                            'rgba(236, 238, 133, 0.4)',
                            'rgba(255,89,0,0.4)',
                            'rgba(0,104,255,0.4)',
                            'rgba(2,153,134,0.4)',
                            'rgba(171,111,39,0.4)',
                            'rgba(201,113,220,0.4)',

                        ]
                    }
                ]
            }
        }
    }

    render() {
        const version = this.props.version;
        let chart;
        if (version === "Doughnut") {
            chart = <Doughnut
                data={this.state.chartData}
                width={300}
                height={300}
                options={{
                    title: {
                        display: true,
                        text: `${this.props.country} unassigned peripherals`,
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
        } else if (version === "Pie") {
            chart = <Pie
                data={this.state.chartData}
                width={300}
                height={300}
                options={{
                    title: {
                        display: true,
                        text: `${this.props.country} unassigned peripherals`,
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
        } else {
            chart = <Bar
                data={this.state.chartData}
                width={300}
                height={300}
                options={{
                    title: {
                        display: true,
                        text: `${this.props.country} unassigned peripherals`,
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
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: "#fff"
                            },
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: "#fff"
                            },
                        }]
                    }


                }}
            />
        }

        return (
            <div className="Chart">
                {chart}
            </div>
        );
    }
}

export default UnassignedPeripheralChart;
