import React, { Component } from 'react'
import {Input,Button, Col,Typography} from 'antd';

const {Title}=Typography;

export class BotttomSubscribe extends Component {
    
    render() {
        return (
            <div style={{marginRight:"10px",justifyContent:"center"}}>
              <div className="heading">
                <Title style={{color:"#5c5959"}} level={3}>Subscribe</Title>
              </div>
                <Input 
                size="large"
                placeholder="Please enter your email"
                style={{
                    margin:"10px",
                    borderRadius:"50px 50px 50px 50px"
                }}/>
                <div style={{textAlign:"center"}}>
                <Button
                style={{background:'#f52929',borderColor:"#f52929"}} 
                size="large" 
                type="primary" 
                shape="round">
                    Subscribe
                </Button>
                </div>
                <span>
                    <p 
                    style={{
                        fontStyle:"italic",
                        textAlign:"center",
                        marginTop:"10px",
                        color:"#b0b2b3"}}>
                        *You will receive the latest news and updates!
                        </p>
                </span>
            </div>
        )
    }
}

export default BotttomSubscribe
