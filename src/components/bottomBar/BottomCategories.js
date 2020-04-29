import React from 'react'
import {Col,List,Typography} from 'antd'

const {Paragraph,Title} = Typography;

const data = [
    'Java',
    'Python',
    'Machine Learning',
    'C',
    'C++',
    'DSA',
  ];

function BottomCategories() {
    return (
        <div style={{marginLeft:"10px",paddingRight:"10px"}}>
          <div className="heading">
            <Title style={{color:"#5c5959"}} level={3}>Categories</Title>
          </div>
            <List
            size="small"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                            <ul >
                                <li style={{listStyleType:"square",color:"#747171"}}>
                                <a>
                                    <Paragraph type="secondary" strong={true}>{item}</Paragraph>
                                </a>
                                </li>
                            </ul>
                    </List.Item>
                )}
            />            
        </div>
    )
}

export default BottomCategories
