import React, { Component } from 'react'
import { Layout, Menu, Row,Col, Divider } from 'antd';
import CategoryDrawer from '../components/Drawer';
import Body1 from '../components/body'


export class Header extends Component {
    render() {
        const { Header } = Layout;
        return (
            <Layout>
            <Header className="header">
              <div className="logo" />
              <CategoryDrawer>hey</CategoryDrawer>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
              >
                <Menu.Item key="1">Home</Menu.Item>
                <Menu.Item key="2" onClick={<CategoryDrawer/>}>Category</Menu.Item>
                <Menu.Item key="3">Subscribe</Menu.Item>
              </Menu>
            </Header>
              <Layout mode="horizontal" style={{ padding: '0 24px 24px', background:"white" }}>
                <Body1/>
                <Body1/>
            </Layout>
          </Layout>
        )
    }
}

export default Header
