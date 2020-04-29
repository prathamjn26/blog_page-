import React, { Component } from 'react'
import { Card } from 'antd';
import {HeartOutlined,CommentOutlined,ShareAltOutlined} from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Content from '../components/Content';

export class Body extends Component {


    render() {
        return (
          <Router>
            <Link to='/content' title={this.props.title}>
            <Card
            key={this.props.key}
            hoverable
            onClick={()=>(<Content/>)}
           actions={[<HeartOutlined/>,<CommentOutlined />,<ShareAltOutlined />]}
          style={{ width: 280 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
          >
          <h3>{this.props.title}</h3> 
          <p>{this.props.description}</p>

          </Card>
          </Link>
          <Switch>
            <Route path='/content'>
              <Content/>
            </Route>
          </Switch>
          </Router>
        )
    }
}

export default Body
