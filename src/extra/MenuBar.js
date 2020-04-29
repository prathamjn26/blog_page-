import React, { Component } from 'react'
import { Menu } from 'antd';

const { SubMenu } = Menu;

export class MenuBar extends Component {
  state = {
    current: 'home',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu  
      theme="dark" 
      onClick={this.handleClick} 
      selectedKeys={[this.state.current]} 
      mode="horizontal"
      style={{marginBottom:"40px"}}>
        <Menu.Item key="home">
          Home
        </Menu.Item>
        <SubMenu
          title={
            <span className="submenu-title-wrapper">
              Category
            </span>
          }
        >
          <Menu.ItemGroup key="category" title="Category">
            <Menu.Item key="java">Java</Menu.Item>
            <Menu.Item key="python">Python</Menu.Item>            
            <Menu.Item key="c/c++">C/C++</Menu.Item>
            <Menu.Item key="ml">Machine learning</Menu.Item>
            <Menu.Item key="dsa">DSA</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="subscibe">
          Subscribe
        </Menu.Item>
        <Menu.Item key="login">
          login
        </Menu.Item>
      </Menu>
    );
  }
}
