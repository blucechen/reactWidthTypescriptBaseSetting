import * as React from 'react';
import { connect } from 'react-redux';
import ThemeSwitch from './ThemeSwitch';
import { createMap } from "../common/map/createMap";
interface ReactProps {
    themeColor: string;
}

class Content extends React.Component<ReactProps,any> {

    constructor(props: ReactProps) {
        super(props);
    }
    componentDidMount(){
        createMap('allMap');
    }
    public render() {
        return(
            <div>
                <p style={{color:this.props.themeColor}}>this is content</p>
                <ThemeSwitch/>
                <div id="allMap" style={{width:200,height:200}}>map</div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    return{
        themeColor:state.themeColor
    }
}

export default connect(mapStateToProps)(Content)