import React, { Component } from 'react'
import './test.css';
import {Typography} from 'antd';
import {CommentOutlined,ShareAltOutlined, StarOutlined} from '@ant-design/icons';

const {Title,Paragraph}=Typography;

export default class Test extends Component {
    render() {
        return (
            <div key="">
                <div className="post-container">
                <div>
                 <img 
                 style={{
                     marginBottom:"10px",
                     borderRadius:"8px 8px 8px 8px",
                     width:420,
                     height:260}} 
                 src="https://cdn.gillion.shufflehound.com/wp-content/uploads/2017/01/26-420x265.jpg "/>
                </div>

                <Title level={2} ellipsis={{rows:2}}> 
                
                </Title>
                
                <div style={{marginTop:"10px",marginBottom:"10px"}}>
                     <span style={{marginRight:"20px",color:"#9b9696"}}><StarOutlined/></span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}>|</span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}><CommentOutlined/></span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}>|</span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}><ShareAltOutlined/></span>
                </div>
                <Paragraph ellipsis={{rows:5}} strong={true}>

                </Paragraph>
                </div>
            </div>
        )
    }
}

