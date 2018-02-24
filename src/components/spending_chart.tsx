import * as React from 'react';
import { chart } from 'highcharts';

let config = {
    chart: {
        type: 'spline',
        zoomType: 'x',
        backgroundColor: 'rgba(0,0,0,0)',
        style: {
            color: 'rgba(255, 255, 255, 0.7)'
        }
    },
    title: {
        text: 'Expenses vs income for month',
        style: {
            color: 'rgba(255, 255, 255, 0.7)'
        }
    },
    xAxis: {
        type: 'datetime',
        labels: {
            style: {
                color: 'rgba(255, 255, 255, 0.7)'
            }
        }
    },
    yAxis: {
        min: 0,
        labels: {
            style: {
                color: 'rgba(255, 255, 255, 0.7)'
            }
        },
        title: {
            text: ''
        }
    },
    legend: {
        itemStyle: {
            color: 'rgba(255, 255, 255, 0.7)'
        }
    },
    plotOptions: {
        spline: {
            marker: {
                enabled: true
            }
        },
        area: {
            fillColor: {
                stops: [
                    [0, 'rgba(255, 0, 0, 0.4)']
                ]
            }
        },
        series: {
            pointStart: Date.UTC(2018, 1, 1)
        }
    },
    series: [
        {
            name: 'Expenses for the day',
            type: 'area',
            color: 'rgba(255, 0, 0, 0.4)',
            textColor: 'white',
            fill: true,
            backgroundColor: 'red',
            data: [
                {
                    x: Date.UTC(2018, 1, 1),
                    y: 220
                },
                {
                    x: Date.UTC(2018, 1, 2),
                    y: 650.60
                },
                {
                    x: Date.UTC(2018, 1, 3),
                    y: 70
                },

            ]
        },
        {
            name: 'Running Expenses for the month',
            color: 'rgba(255, 125, 0, 0.4)',
            data: [
                {
                    x: Date.UTC(2018, 1, 1),
                    y: 220
                },
                {
                    x: Date.UTC(2018, 1, 2),
                    y: 870.60
                },
                {
                    x: Date.UTC(2018, 1, 3),
                    y: 940.60
                }

            ]
        },
        {
            name: 'Income',
            color: 'rgba(0, 255, 0, 0.4)',
            type: 'column',
            data: [
                {
                    x: Date.UTC(2018, 1, 1),
                    y: 0
                },
                {
                    x: Date.UTC(2018, 1, 10),
                    y: 2100
                },

            ]
        }
    ]
};

export class SpendingChart extends React.Component {

    componentDidMount() {
        chart('main', config);
    }

    render() {

        return (
            <div className="col spending section">
                <div id="main" />
            </div>

        );
    }
}

export default SpendingChart;