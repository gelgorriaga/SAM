import React, { Component } from 'react';
import UnassignedPeripheralChart from './UnassignedPeripheralChart';
import ComputerChart from './ComputerChart';
import MobilePhoneChart from './MobilePhoneChart';
import './Selector.css';


class Selector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'Uruguay',
            chartType: 'UnassignedPeripheralChart',
            chartVersion: 'Doughnut',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render() {
        const chartType = this.state.chartType;
        let chart;
        if (this.state.chartType === 'UnassignedPeripheralChart') {
            chart = <UnassignedPeripheralChart country={this.state.country} version={this.state.chartVersion} />;
        } else if (this.state.chartType === 'ComputerChart') {
            chart = <ComputerChart country={this.state.country} />;
        } else {
            chart = <MobilePhoneChart country={this.state.country} />;
        }
        return (
            <div>
                <h1> Oktana Asset Charts </h1>
                <div className="Selector">

                    <form>
                        <div>
                            <label htmlFor="country">Country: </label>
                            <select value={this.state.country} onChange={this.handleChange} name="country">
                                <option value="Paraguay">Paraguay</option>
                                <option value="Peru">Peru</option>
                                <option value="Uruguay">Uruguay</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="chartVersion">Device: </label>
                            <select value={this.state.chartType} onChange={this.handleChange} name="chartType">
                                <option value="UnassignedPeripheralChart">Unassigned peripherals</option>
                                <option value="ComputerChart">Computers</option>
                                <option value="MobilePhoneChart">Mobile phones</option>
                            </select>
                        </div>
                        {(this.state.chartType === 'UnassignedPeripheralChart') && <div>

                            <label htmlFor="chartType">Type of chart: </label>
                            <select value={this.state.chartVersion} onChange={this.handleChange} name="chartVersion">
                                <option value="Doughnut">Doughnut</option>
                                <option value="Pie">Pie</option>
                                <option value="Bar">Bar</option>
                            </select>

                        </div>
                        }

                    </form>
                </div>
                <div style={{ width: 400, height: 250, margin: "5vw 35vw" }}>
                    {chart}
                </div>

            </div>
        );
    }
}
export default Selector;