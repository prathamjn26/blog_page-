import React, { Component } from 'react'
import './test.css';
import {Pagination, List,Typography} from 'antd'
import {CommentOutlined,ShareAltOutlined, StarOutlined} from '@ant-design/icons';
import {data} from '../testingdata/data'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Content from './postDescription/Content';

const {Title,Paragraph}=Typography;

export class CardDisplay extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        minValue:0,
        maxValue:9,
     }
   }
   
   handleChange = value => {
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: 9
      });
    } else {
      this.setState({
        minValue: this.state.maxValue,
        maxValue: value * 9
      });
    }
  };
 
    render() 
    {

   return (
    <Router>
    <div>
    <List
        itemLayout="vertical"
        grid={{  gutter:[12,24],column:3 }}
        dataSource={data.slice(this.state.minValue,this.state.maxValue).map(item=>item)}
        renderItem={item =>
          <Link to={`${'/Category/'}${item.category}${'/'}${'Key='}${item.key}`}>
          <List.Item>
                <div key={item.key}>
                <div className="post-container">
                <div>
                 <img 
                 style={{
                     marginBottom:"10px",
                     borderRadius:"8px 8px 8px 8px",
                     width:350,
                     height:210}} 
                 src={item.link}/>
                </div>

                <Title level={2} ellipsis={{rows:2}}> 
                {item.title}
                </Title>
                
                <div style={{marginTop:"10px",marginBottom:"10px"}}>
                     <span style={{marginRight:"20px",color:"#9b9696"}}><StarOutlined/></span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}>|</span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}><CommentOutlined/></span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}>|</span>
                     <span style={{marginLeft:"20px",marginRight:"20px",color:"#9b9696"}}><ShareAltOutlined/></span>
                </div>
                <Paragraph ellipsis={{rows:5}} strong={true}>
                  {item.description}
                </Paragraph>
                </div>
            </div>
          </List.Item></Link>
        }
      />
    <Pagination 
    style={{marginLeft:"65%",marginTop:"50px"}}
    defaultCurrent={1} 
    defaultPageSize={9}
    onChange={this.handleChange}
    total={data.map(item=>item).length} 
    />
    </div>
    </Router>
        );
    }
  }

export default CardDisplay
