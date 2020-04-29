import React, { Component } from 'react'
import {withRouter} from "react-router-dom";
import {Row,Col} from 'antd'
import BreadcrumbBlog from './BreadCrumbBlog';
import CardDisplay from './CardDisplay';



export class Category extends Component {

    render() {
        return (
            <div>
            <Row>
                <Col span={1}/>
                <Col span={22}>
                <BreadcrumbBlog category={this.props.match.params.type}/>
                </Col>
                <Col span={1}/>
                
            </Row>
            
            </div>
        )
    }

    newMethod() {
        return <CardDisplay />;
    }
}

export default withRouter(Category);