import * as React from 'react';
import { connect } from 'react-redux';

class HeaderProperties {

}

class Header extends React.Component<HeaderProperties> {
    render() {
        return (
            <div className="row">
                <header className="py-0 my-0" />
            </div>
        );
    }
}

function mapStateToProps(state: {}, ownProps: HeaderProperties): HeaderProperties {
    return {
    };
}

export default connect(mapStateToProps)(Header);
