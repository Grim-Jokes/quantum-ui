import * as React from 'react';

class Income extends React.Component {
    render() {
        return (
            <div className="col income section mr-3">
                <div className="p-3">
                    <h6>Income</h6>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <td>
                                    This Month
                                </td>
                                <td>
                                    This Year
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>$4,400.00</td>
                                <td>$8,800.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Income;