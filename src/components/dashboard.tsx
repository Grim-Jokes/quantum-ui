import * as React from 'react';
import { connect } from 'react-redux';
import Header from 'components/header';

class DashboardProperties {
}

class Dashboard extends React.Component<DashboardProperties> {
    render() {
        return (
            <div className="container">
                <Header />
                <div>
                    Body
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
