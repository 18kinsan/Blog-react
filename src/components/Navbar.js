import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb, Icon, Col, Row } from 'antd';

import Home from './Home.js';
import Profile from './Profile.js';
import Portofolio from './Portofolio.js';
import Contact from './Contact.js';
import PersonList from './PersonList.js';

const { Header, Content, Footer } = Layout;



class Navbar extends React.Component{
    render(){
        return(
        <BrowserRouter>
            <Layout className="layout">
                <Header>
                <div className="logo"/>
                
                <Menu
                    theme="dark"
                    mode="horizontal"
                    // defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px', textAlign: 'center'}}
                >
                        <Menu.Item key="1">Home <Link to='/Home'></Link></Menu.Item>
                        <Menu.Item key="2">Profile <Link to='/Profile'></Link></Menu.Item>
                        <Menu.Item key="3">Portofolio <Link to='/Portofolio'></Link></Menu.Item>
                        <Menu.Item key="4">Contact <Link to='/Contact'></Link></Menu.Item>                       
                        <Menu.Item key="5">PersonList <Link to='/PersonList'></Link></Menu.Item>  
                </Menu>
                </Header>

                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>&nbsp;</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#001529', padding: 24, minHeight: 550 }}>
                    <Route path='/Home' component={Home}></Route>
                    <Route path='/Profile' component={Profile}></Route>
                    <Route path='/Portofolio' component={Portofolio}></Route>
                    <Route path='/Contact' component={Contact}></Route>
                    <Route path='/PersonList' component={PersonList}></Route>
                </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                <i>Being Normal is Boring</i>
                </Footer>
            </Layout>
        </BrowserRouter>
        );
    }
}

export default Navbar;