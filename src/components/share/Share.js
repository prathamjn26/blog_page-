import React, { Component } from 'react';
import {Modal} from 'antd';
import {ShareAltOutlined} from '@ant-design/icons';
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

export class  Share extends Component{
    
    state = {
        modal2Visible: false,
      };
    
    
    setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
   render()
   {
     return(
    <div>   
      <ShareAltOutlined onClick={() => this.setModal2Visible(true)} />
        <Modal
            centered
            visible={this.state.modal2Visible}
            onCancel={() => this.setModal2Visible(false)}
            footer={null}
        >
          <h1 style={{textAlign:"center",color:"rgb(62, 66, 68)"}}>Share Post</h1>

       <LinkedinShareButton
       title="linkedin"
       summary="description"
       source=""
       url="https://www.codeplanet.co.in/">
        <LinkedinIcon round className="share-button"/>
       </LinkedinShareButton>

       <TwitterShareButton
       title="twiiter"
       url="https://www.codeplanet.co.in/">
         <TwitterIcon round className="share-button"/>
       </TwitterShareButton>
      
       <FacebookShareButton
       quote="facebook"
       hashtag=""
       url="https://www.codeplanet.co.in/">
         <FacebookIcon round className="share-button"/>
       </FacebookShareButton>

       <EmailShareButton
       subject="email"
       separator=""
       url="https://www.codeplanet.co.in/"
       body="description">
         <EmailIcon round className="share-button"/>
       </EmailShareButton>


       <WhatsappShareButton
       separator=""
       title="whatsApp"
       url="https://www.codeplanet.co.in/">
         <WhatsappIcon className="share-button" round/>
        </WhatsappShareButton>   

       <TelegramShareButton
       title="Telegram"
       url="https://www.codeplanet.co.in/">
         <TelegramIcon round className="share-button"/>
       </TelegramShareButton>
         
      </Modal>

    </div>
     );
   }
  }
export default Share
