import React, { Component } from 'react'
import {Breadcrumb, Divider} from 'antd';


export class BreadCrumbBlog extends Component {
  render() {
    console.log(this.props.category)
    return (
      <div>
      <Breadcrumb style={{marginTop:"10px",}}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        Category
      </Breadcrumb.Item>
    <Breadcrumb.Item>{this.props.category}</Breadcrumb.Item>
    </Breadcrumb>
    <Divider/>
    </div>
       )
  }
}

export default BreadCrumbBlog