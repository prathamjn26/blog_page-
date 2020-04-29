import React, { Component } from 'react'
import {Typography,List} from 'antd';
import '../test.css'

const {Title}=Typography;

const data = [
    {
      title: 'Ant Design Title 1 hjj hjjjd hd dhd dhd dhd dhhd hhd ghhd hdhd dhhd dhhd dhdhd g jhlh lhu jhlh ',
      link:"https://cdn.gillion.shufflehound.com/wp-content/uploads/2017/01/26.jpg"
    },
    {
      title: 'Ant Design d ds d d djgv fvjvg ghgg jg',
      link:"https://cdn.gillion.shufflehound.com/wp-content/uploads/2017/01/28-1200x675.jpg"
    },
    {
      title: 'Ant Design Title fcvbn xc j dch fb gb g g g g ghg gtd 3',
      link:"https://www.freepngimg.com/thumb/tree/1-tree-png-image-download-picture.png"
    },
  ];

export class RecommendedPost extends Component {
    render() {
        return (
    <div > 

    <div style={{marginBottom:"30px",borderBottom:"2px solid #f0f0f0",marginTop:"100px"}}>
    <Title style={{color:"#5c5959"}} level={3}>
     Recommended Post
    </Title>
    </div>

        <List
        grid={{ gutter: 8, column: 3 }}
        dataSource={data}
        renderItem={item =>
          <List.Item>
    
        <img 
        style={{
            width:270,
            height:200,
            margin:'10px',
            borderRadius:"7px 7px 7px 7px"}} 
            src={item.link} />
        <Title level={4} style={{width:265,margin:'5px'}} ellipsis={{rows:3}}>{item.title} </Title>
            </List.Item>
        }
      />
    </div>
        )
    }
}
export default RecommendedPost
