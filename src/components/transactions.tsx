import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { Transaction } from 'models/transaction';

interface TransactionsProperties {
    transactions: Transaction[];
    getTransactions(categoryId?: number | null): Action;
}

function mapData(data: Transaction) {
    return (
        <tr className="d-flex" key={data.id.toString()}>
            <td scope="row" className="col text-left">{data.date}</td>
            <td className="col text-center">{data.name}</td>
            <td className="col text-right amount">{data.value}</td>
        </tr>
    );
}

class Transactions extends React.Component<TransactionsProperties> {

    componentDidMount() {

        if (this.props.transactions) {
            this.props.getTransactions();            
        }
    }

    render() {

        let data = this.props.transactions;

        if (!data) {
            return <div />;
        }

        data = data.filter(x => x.date.indexOf('2018') >= 0);

        return (
            <div className="transactions section col mr-3">
                <div className="section-content p-3">
                    <h6>Transactions</h6>
                    <table className="table table-sm">
                        <tbody>
                            {data.map(mapData)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

import { AppState } from 'states/app-state';
import * as Actions from 'actions//transactions';

function mapStateToProps(state: AppState): {transactions: Transaction[] } {
    return {
        transactions: state.transactionState.transactions
    };
}

function mapDispatchToProps(dispatch: Function): { getTransactions: Function } {
    return {
        getTransactions: () => {
            return dispatch(Actions.getTransactions());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);
