import React, { Component } from 'react'
import {Menu,Row, Divider,Col,Button} from 'antd';
import {
    WhatsappShareButton,
    LinkedinShareButton, 
    WhatsappIcon, 
    LinkedinIcon,
    TelegramShareButton,
    TelegramIcon,
    EmailShareButton,
    EmailIcon,
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon} from 'react-share'
import { SearchOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import CardDisplay from './CardDisplay';
import Content from './postDescription/Content';
import Category from './Category';

const { SubMenu } = Menu;

export class HeaderBlog extends Component {
    state = {
        current: 'home',
      };
    

      handleClick = e => {
        console.log('click ');
        this.setState({
          current: e.key,
        });
      };
    render() {
    
        return (
            <Router>
            <div>
               <Row style={{margin:"1%"}}>
                   <Col span={22}>
                    <LinkedinShareButton
                    title="linkedin"
                    summary="description"
                    source=""
                    url="https://www.codeplanet.co.in/">
                        <LinkedinIcon round size={40}/>
                    </LinkedinShareButton>

                    <TwitterShareButton
                    title="twiiter"
                    url="https://www.codeplanet.co.in/">
                        <TwitterIcon round size={40}/>
                    </TwitterShareButton>
                    
                    <FacebookShareButton
                    quote="facebook"
                    hashtag=""
                    url="https://www.codeplanet.co.in/">
                        <FacebookIcon round size={40}/>
                    </FacebookShareButton>

                    <EmailShareButton
                    subject="email"
                    separator=""
                    url="https://www.codeplanet.co.in/"
                    body="description">
                        <EmailIcon round size={40}/>
                    </EmailShareButton>


                    <WhatsappShareButton
                    separator=""
                    title="whatsApp"
                    url="https://www.codeplanet.co.in/">
                        <WhatsappIcon size={40} round/>
                        </WhatsappShareButton>   

                    <TelegramShareButton
                    title="Telegram"
                    url="https://www.codeplanet.co.in/">
                        <TelegramIcon round size={40}/>
                    </TelegramShareButton>
                    </Col>

                    <Col span={2}>
                    <Button ><SearchOutlined />Search</Button>
                    </Col>
                    <Divider/>
               </Row>
                       
               <Row>
                   <h1
                   style={{
                       textAlign:"center",
                       fontSize:"80px",
                       color:"rgb(29, 28, 28)"
                   }}>
                        Technical Blog
                   </h1>
               </Row>

               <Row>
                   <Menu  
                    theme="dark" 
                    onClick={this.handleClick} 
                    selectedKeys={[this.state.current]} 
                    mode="horizontal"
                    style={{marginBottom:"40px"}}>
                        
                        <Menu.Item key="home">
                        <Link to='/'>Home</Link>
                        </Menu.Item>
                        <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                Category
                            </span>
                        }
                        >
                        <Menu.ItemGroup key="category" title="Category">
                            <Menu.Item key="java"><Link to='/Category/Java'>Java</Link></Menu.Item>
                            <Menu.Item key="python"><Link to='/Category/Python'>Python</Link></Menu.Item>            
                            <Menu.Item key="c"><Link to='/Category/C'></Link>C</Menu.Item>
                            <Menu.Item key="c++"><Link to='/Category/C++'></Link>C++</Menu.Item>
                            <Menu.Item key="ml"><Link to='/Category/Machine_learning'>Machine learning</Link></Menu.Item>
                            <Menu.Item key="dsa"><Link to='/Category/DSA'>DSA</Link></Menu.Item>
                        </Menu.ItemGroup>
                        </SubMenu>
                        
                        <Menu.Item key="subscibe">
                          Subscribe
                        </Menu.Item>
            
                        <Menu.Item key="login">
                        login
                        </Menu.Item>
                    </Menu>           
                    </Row>
                    
                    <Row>
                     <Switch>
                         <h1>hey</h1>
                        <Col span={1}/>
                        <Col span={22}>
                            <h1>1</h1>
                        <Route exact path='/'><h2>he</h2><CardDisplay/></Route>
                        <h2>2</h2>
                        </Col>
                        <Col span={1}/>
                    <h3>3</h3>
                   <Route path='/Category/:type' children={<Category/>}>
                    </Route>
                   </Switch> 
                    </Row>
               </div>
               </Router>
        )
    }
}

export default HeaderBlog
