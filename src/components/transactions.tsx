import * as React from 'react';
import { connect } from 'react-redux';

class TransactionsProperties {
}

interface Transaction {
    id: number;
    date: Date;
    value: number;
    description: string;

}

function mapData(data: Transaction) {
    return (
        <tr className="d-flex" key={data.id.toString()}>
            <td scope="row" className="col-2 text-left">{data.date.toLocaleDateString()}</td>
            <td className="col-7 text-center">{data.description}</td>
            <td className="col-3 text-right amount">{data.value.toFixed(2)}</td>
        </tr>
    );
}

class Transactions extends React.Component<TransactionsProperties> {
    render() {

        const data = [
            {
                id: 1,
                date: new Date(),
                value: 400,
                description: 'Subaru'
            },
            {
                id: 2,
                date: new Date(),
                value: 400,
                description: 'Subaru'
            },
            {
                id: 3,
                date: new Date(),
                value: 400,
                description: 'Subaru'
            },
            {
                id: 4,
                date: new Date(),
                value: 400,
                description: 'Subaru'
            }
        ];

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

function mapStateToProps(state: {}, ownProps: TransactionsProperties): TransactionsProperties {
    return {};
}

function mapDispatchToProps() {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Transactions);
