import React, {Component } from 'react'
import { Typography,Comment, Avatar, Form, Button, List, Input ,Row,Col} from 'antd';
import moment from 'moment';
import '../test.css';
import Tags from '../share/Tags'

const {TextArea}=Input;

const {Title}=Typography;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })
(
  class extends React.Component {
    render() {
      const { onSubmit, form,submitting } = this.props;
      const { getFieldDecorator } = form;
      return (
          <Form 
          layout="vertical" 
          onSubmit={onSubmit} 
          className="comment-box">
         
          <Title>Leave a Reply</Title><br/><br/>     
         
              <Form.Item 
              label={<Title level={4}>Add Comment</Title>}>
              {getFieldDecorator('comment', 
              {
                rules: [{ required: true, message: 'Please enter comment' }],
              })
              (<TextArea rows={4}/>)}
            </Form.Item>
            
            <Row>
                <Col span={11}>
                <Form.Item 
                label={<Title level={4} >Name</Title>}>
                {getFieldDecorator('name', 
                {
                    rules: [{ required: true, message: 'Please enter your name' }],
                })
                (<Input size="large"/>)}
                </Form.Item>
                </Col>

                <Col span={2}/>

                <Col span={11}>
                <Form.Item 
                label={<Title level={4}>Email</Title>}>
                {getFieldDecorator('email',
                {
                    rules:[
                        {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                        },
                        {
                        required: true,
                        message: 'Please input your E-mail!',
                        },
                    ]
                })
                (<Input size="large"/>)}
                </Form.Item>
                </Col>
            </Row>

            <Form.Item >
                <div style={{textAlign:"center"}}>
                    <Button 
                    size="large" 
                    shape="round"
                    type="primary" 
                    htmlType="submit"
                    loading={submitting}
                    style={{background:'#474545',borderColor:"#474545",marginTop:"20px"}}>
                      Add Comment
                    </Button>
                </div>
            </Form.Item>
          </Form>
      );
    }
  },
);

const CommentList = ({ comments }) => (

    <div style={{maxHeight:"1200px",overflow:"auto",marginTop:"100px"}}>
    
    <div style={{marginBottom:"30px",borderBottom:"2px solid #f0f0f0"}}>
    <Title style={{color:"#5c5959"}} level={3}>
    {`${comments.length} ${comments.length > 1 ? 'Replies' : 'Reply'}`}
    </Title>
    </div>
    
    <List
      itemLayout="vertical"
      dataSource={comments}
      renderItem={props => (
        <List.Item>
          <List.Item.Meta
                                avatar={
                                <Avatar 
                                shape="square" 
                                size={80}
                                src="https://cdn.gillion.shufflehound.com/wp-content/uploads/2017/01/28.jpg" />}
                                title={<Comment {...props}/>}
                                />                      
        </List.Item>
      )}
    />
    </div>
  );
  

export class CommentBox extends Component {

    state = {
        comments: [
          {author:"Pratham Jain",
          content:"as fe ae fee ed qwe wqe",
          datetime: moment().fromNow(),
          actions:[<Tags/>]},

          {author:"Mohit Jain",
           content:"its hd hd hse jajh wehba ahjdg vd gb ygsd ",
           datetime: moment().fromNow(),
           actions:[<Tags/>]}
        ],
        submitting:false,
      };

    handleSubmit = e => {
        e.preventDefault();
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log(values.comment)
          this.setState({
              submitting:true,
          });
          setTimeout(() => {
            this.setState({
              submitting: false,
              comments: [
                {
                  author: values.name,
                  content: values.comment,
                  datetime: moment().fromNow(),
                  actions:[<Tags/>],
                },
                ...this.state.comments,
              ],
            });
          }, 1000);
          form.resetFields();
      })}
    
      saveFormRef = formRef => {
        this.formRef = formRef;
      };
    
    render() {
        {
            const { comments,submitting} = this.state;
        
            return (
                <div>
                {comments.length > 0 && <CommentList comments={comments} />}
                <Comment
                  content={

                    <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    onSubmit={this.handleSubmit}
                    submitting={submitting}
                    />
                  }
                />
                </div>
              );
          }
        }
    }

export default CommentBox