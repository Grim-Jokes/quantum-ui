import * as React from 'react';
import Expenses from 'components/expenses';
import Income from 'components/income';
import Remainder from 'components/remainder';

class Summary extends React.Component {
    render() {
        return (
            <div className="summary col mr-3">
                <div className="row">
                    <Expenses />
                </div>
                <div className="row mt-3">
                    <Income /><Remainder />
                </div>
            </div>
        );
    }
}

export default Summary;