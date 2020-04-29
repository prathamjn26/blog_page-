import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Subscribe from './components/Subscribe'
import {BackTop, Col, Row, Divider} from 'antd'
import Footerr from './components/Footerr'
import CardDisplay from './components/CardDisplay'
import Header from './components/Header';
import Reviews from './components/bottomBar/Reviews'
import { Category } from './components/Category';
import Content from './components/postDescription/Content'
import MainRoute from './components/MainRoute'
import RegisterForm from './components/RegistrationForm/RegisterForm'

function App() 
{
  return (
  <div>
    <RegisterForm/>
    {/* <MainRoute/> */}
     {/* <Header/> */}
      {/* <Row>
     <Col span={1}/>
     <Col span={22}>
     <CardDisplay/>
     </Col>
     <Col span={1}/>
     </Row>  */}
    {/* <div>
    <Subscribe/>
    <BackTop style={{right:"40px",bottom:"100px"}}/>
    </div>
    <Footerr/>  */}
  </div>
  );
}

export default App;