import * as React from 'react';
import {
    NavLink
} from 'react-router-dom';
import './less/layout.less';
import { Layout } from 'antd';
const { Header, Content, Sider } = Layout;

class Container extends React.Component {

    public render() {
        return (
            <Layout>
                <Header className="layout-header">header</Header>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <ul>
                            <li><NavLink to="/" exact={true} activeClassName="selected" replace={true}>Home</NavLink></li>
                            <li><NavLink to="/header" activeClassName="selected" replace={true}>Header</NavLink></li>
                            <li><NavLink to="/content" activeClassName="selected" replace={true}>Content</NavLink></li>
                        </ul>
                    </Sider>
                    <Content>{this.props.children}</Content>
                </Layout>
            </Layout>
        );
    }
}


export default Container