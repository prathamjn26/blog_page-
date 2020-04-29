import React, { Component } from 'react'
import {Row,Col,Typography} from 'antd'
import RecommendedPost from '../components/RecommendedPost'

const {Title}=Typography;

export class Recommended extends Component {
    render() {
        return (
        <div style={{marginTop:"100px"}}>
            <Row>
            <div style={{marginBottom:"30px",borderBottom:"2px solid #f0f0f0"}}>
            <Title style={{color:"#5c5959"}} level={3}>
            Recommended Post
            </Title>
            </div>
            </Row>
            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <RecommendedPost/>
                </Col>
                <Col span={8}>
                    <RecommendedPost/>
                </Col>
                <Col span={8}>
                    <RecommendedPost/>
                </Col>
           </Row>
        </div>
        )
    }
}
export default Recommended