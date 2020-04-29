import React from 'react'
import {Col,Typography, List,Avatar} from 'antd'
import '../test.css';
import { MessageOutlined, StarOutlined } from "@ant-design/icons";
import BotttomSubscribe from './BotttomSubscribe';
import BottomCategories from './BottomCategories';

const {Title,Paragraph} = Typography;

const data = [
    {
      title: 'Ant Design Title 1 hjj hjg jhlh lhu jhlh ',
      link:"https://cdn.gillion.shufflehound.com/wp-content/uploads/2017/01/26-80x80.jpg"
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

const IconText = ({ icon, text }) => (
    <span>
      {React.createElement(icon, { style: { marginRight: 8,size:2 } })}
      {text}
    </span>
  );

function Reviews()
  
    {
        return (
            <div>
              <Col span={7}><BotttomSubscribe/></Col>
              <Col span={1}/>
                    <Col span={8}>
                        <div className="heading">
                        <Title style={{color:"#5c5959"}} level={3}>Reviews</Title>
                        </div>
                        <div>
                        <List
                            itemLayout="vertical"
                            dataSource={data}
                            renderItem={item => (
                            <List.Item>                        
                                <List.Item.Meta
                                avatar={
                                <Avatar 
                                shape="square" 
                                size={70}
                                src={item.link} />}
                                title={
                                <div>
                                <a><Paragraph ellipsis={{rows:2}}>
                                    {item.title}
                                </Paragraph>
                                </a>
                                <span style={{margin:"0 5px",color:"#929090",fontSize:"13px"}}>
                                <IconText
                                  icon={StarOutlined}
                                  text="156"
                                  key="list-vertical-star-o"
                                />
                                </span>
                                <span style={{margin:"0 5px",color:"#929090",fontSize:"13px"}}>|</span>
                                <span style={{margin:"0 5px",color:"#929090",fontSize:"13px"}}>
                                 <IconText
                                  icon={MessageOutlined}
                                  text="2"
                                  key="list-vertical-message"
                                />
                                </span>
                                </div>}
                                />
                            </List.Item>
                            )}
                        />
                       </div>
                    </Col>
                    <Col span={1}/>
                    <Col span={7}>
                      <BottomCategories/>
                    </Col>
                    
            </div>
        )
    }

export default Reviews