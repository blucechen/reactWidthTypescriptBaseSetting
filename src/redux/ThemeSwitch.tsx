import * as React from 'react';
import { connect } from 'react-redux';

interface ReactProps {
    themeColor: string;
    onSwitchColor(color: string): void;
}

class ThemeSwitch extends React.Component<ReactProps, any>{
    constructor(props: ReactProps) {
        super(props)
    }
    public render() {
        return (
            <div>
                <button style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
    private handleSwitchColor(color: string) {
        if (this.props.onSwitchColor) {
            this.props.onSwitchColor(color);
        }
    }
}

const mapStateToProps = (state:any) => {
    return{
        themeColor:state.themeColor
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        onSwitchColor:(color:string) => {
            dispatch({type:'CHANGE_COLOR',themeColor:color})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThemeSwitch)