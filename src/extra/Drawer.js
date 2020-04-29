import React, { Component } from 'react'
import {Drawer, Row, Col, Divider} from 'antd'
import {BarsOutlined} from '@ant-design/icons'

class CategoryDrawer extends Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

    render() {
        return (
        <div>
          <BarsOutlined onClick={this.showDrawer}/>
        <Drawer
          title="Multi-level drawer"
          width={520}
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          placement="top"
        >
        <Row>
          <Col span={6}>
            <Row>
            <a style={{}}>Category1</a>
            </Row>
            <Row>
            <a>Category1</a>
            </Row>
            <Row>
            <a>Category1</a>
            </Row>
            <Row>
            <a>Category1</a>
            </Row>
          </Col>

          <Col span={6}>
          <a>Category1</a>
          </Col>
          <Col span={6}>
          <a>Category1</a>
          <a>Category1</a>
          <a>Category1</a>
          <a>Category1</a>
          <a>Category1</a>
          <a>Category1</a>
          </Col>
          <Col span={6}>
          <a>Category1</a>
          <a>Category1</a>
          <a>Category1</a>

          </Col>

        </Row>

        </Drawer>
      </div>
        )
    }
}

export default CategoryDrawer