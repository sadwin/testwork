import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                {this.props.isAuthenticated ?

                    <div>
                        <Header>
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >

                                <Menu.Item key="1" onClick={this.props.logout}>
                                    Выйти
                    </Menu.Item>

                                <Menu.Item key="2">
                                    <Link to="/">Главная страница</Link>
                                </Menu.Item>

                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                                <Breadcrumb.Item><Link to="/">Главная</Link></Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            ЗДЕСЬ КОПИРАЙТ ©2019 Created by #doublepurple
                </Footer>
                    </div>

                    :

                    <div>
                        <Header>
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >

                                <Menu.Item key="2">
                                    <Link to='/'>Вход</Link>
                                </Menu.Item>

                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>


                                {this.props.children}

                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Вы не залогинены для использования данного веб приложения.
                </Footer>
                    </div>


                }
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));