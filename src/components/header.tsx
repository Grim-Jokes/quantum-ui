import * as React from 'react';
import { connect } from 'react-redux';

class HeaderProperties {

}

class Header extends React.Component<HeaderProperties> {
    render() {
        return (
            <header />
        );
    }
}

function mapStateToProps(state: {}, ownProps: HeaderProperties): HeaderProperties {
    return {
    };
}

export default connect(mapStateToProps)(Header);
