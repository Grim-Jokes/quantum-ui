import * as React from 'react';

class Expenses extends React.Component {
    render() {
        const header: string[] = [
            'Today',
            'This Week',
            'This Month',
            'This Year'
        ];

        const data: number[] = [
            870,
            0,
            1740,
            3480
        ];

        return (
            <div className="expenses section col">
                <div className="p-3">
                    <h6>Expenses</h6>
                    <table className="expenses table">
                        <thead>
                            <tr>
                                {header.map(x => <td key={x} className="card-text">{x}</td>)}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {data.map(
                                    (x, index) => {
                                        return <td className="amount" key={index}>{x.toFixed(2)}</td>;
                                    }
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Expenses;