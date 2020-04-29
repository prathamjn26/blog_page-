import React, { Component } from 'react';
import {Typography,Col, Row, Divider} from 'antd';
import {withRouter} from "react-router-dom";
import {data} from '../../testingdata/data';
import SharePanel from '../share/SharePanel';
import ContentHeader from '../BreadCrumbBlog'
import CommentBox from './CommentBox';
import RecommendedPost from './RecommendedPost';

const {Paragraph}=Typography

export class Content extends Component {
    render() 
    {         
        const key=data.map(item=>{if(this.props.match.params.id===item.key){return(item.key)}});
        const index=key.indexOf(this.props.match.params.id);
        
         return (
            <div>
                <Row>
                    <Col span={2} >
                    </Col>
                    <Col span={20}>
                        <ContentHeader category={this.props.match.params.type}/>
                    </Col>
                    <Col span={2}>
                    </Col>
                </Row>

                <Row>   
                <Col span={4}>
                </Col>
                <Col span={16}>
                    <Row className="content-heading">
                    {data.map(item=>this.props.match.params.id===item.key?<h1>{item.title}</h1>:null)}
                    </Row>
                    <Row>
                    <img 
                     className="content-image"
                     src={data[index].link}/>
                    </Row>
                    <Row>
                    {data.map(item=>this.props.match.params.id===item.key?<Paragraph strong={true}>{`${item.description}`}</Paragraph>
                    :null)}
                     </Row>
                     <Row>
                    <SharePanel category={this.props.match.params.type}/>
                    <Divider/>
                     </Row>
                </Col>
                <Col span={4}>
                </Col>
                </Row>

                <Row>
                    <Col span={4} >
                    </Col>
                    <Col span={16}>
                        <RecommendedPost/>
                    </Col>
                    <Col span={4}>
                    </Col>
                    
                </Row>
                 
                <Row>
                <Row>
                    <Col span={4}/>
                    <Col span={16}>
                     <CommentBox/> 
                    </Col>
                    <Col span={4}/>
                    </Row>
                </Row>
            </div>
        )
    }
}

export default withRouter(Content);