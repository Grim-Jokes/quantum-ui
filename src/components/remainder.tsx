import * as React from 'react';

class Remainder extends React.Component {
    render() {
        return (
            <div className="col remainder section">
                <div className="p-3">
                    <h6>
                        Monthly Budget Remainder
                    </h6>
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <td>
                                    Limit
                                </td>
                                <td>
                                    Remainder
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="amount">
                                    1,500.00
                                </td>
                                <td className="amount">
                                    630.00
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Remainder;