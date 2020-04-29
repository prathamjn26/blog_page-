import React, { Component } from 'react'
import { Divider,Row,Col } from 'antd'
import {BrowserRouter as Router,Link, Route,Switch} from "react-router-dom";
import Tags from './Tags'
import Share from './Share'
import { Category } from '../Category';

export class SharePanel extends Component {
    render() {
        return (
        <Router>
        <div>
            <Divider/>    
            <Row>
            <Col span={4}>
                <Tags/>
            </Col>
            <Col span={8}>
                <Share/>
            </Col>
            <Col span={12}>
        <Link to={`${'/Category/'}${this.props.category}`}>
            <h3 style={{textAlign:"right",marginRight:"10%",color:"rgb(62, 66, 68)"}}>
                {this.props.category}
            </h3>
        </Link> 
            </Col>
            </Row>
        </div>
        </Router>
        )
    }
}

export default SharePanel     