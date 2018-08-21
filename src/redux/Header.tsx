import * as React from 'react';
import { connect } from 'react-redux';

interface ReactProps {
    themeColor: string;
}

class Header extends React.Component<ReactProps,any> {

    constructor(props: ReactProps) {
        super(props);
    }
    public render() {
        return (
            <h1 style={{ color: this.props.themeColor }}>this is header</h1>
        )
    }
}

const mapStateToProps = (state:any) => {
    return{
        themeColor:state.themeColor
    }
}

export default connect(mapStateToProps)(Header)