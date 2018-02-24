import * as React from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';
import Transactions from 'components/transactions';
import Summary from 'components/summary';
import Categories from 'components/categories';
import SpendingChart from 'components/spending_chart';

class DashboardProperties {
}

class Dashboard extends React.Component<DashboardProperties> {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row" id="summary">
                    <SpendingChart />
                </div>
                <div className="row" id="dashboard">
                    <Transactions />
                    <Summary />
                    <Categories />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: {}, ownProps: DashboardProperties): DashboardProperties {
    return {};
}

function mapDispatchToProps() {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
