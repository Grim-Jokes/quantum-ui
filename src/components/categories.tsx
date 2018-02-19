import * as React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const options = {
    legend: {
        labels: {
            fontColor: 'rgba(255, 255, 255, 0.4)'
        }
    },
    scales: {
        xAxes: [{
            ticks: {
                fontColor: 'rgba(255, 255, 255, 0.4)'
            },
            stacked: true,
            categorySpacing: 0
        }],
        yAxes: [{
            ticks: {
                fontColor: 'rgba(255, 255, 255, 0.4)'
            },
            stacked: false,
            categorySpacing: 0
        }]
    }
};

class Categories extends React.Component {

    render() {

        const data = this.getData();

        return (
            <div className="categories section col">
                <div className="p-3">
                    <h6>Categories</h6>
                    <HorizontalBar
                        data={data}
                        options={options}
                    />
                </div>
            </div>
        );
    }

    private getData() {
        const data = {
            labels: ['Hoes', 'Wroom Wroom', 'Main Hoe'],
            datasets: [
                {
                    label: 'remainder',
                    textColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: [
                        'rgba(0, 255, 0, 0.2)',
                        'rgba(0, 255, 0, 0.2)',
                        'rgba(255, 0, 0, 0.2)'],
                    data: [10, 5, -9]
                }
            ]
        };

        return data;
    }

}

export default Categories;