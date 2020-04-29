import React,{Component} from 'react'
import {
    Form,
    Input,
    Button,
    Col,
    Row,
    Typography,
    Card,
    Divider} from 'antd';
import '../RegistrationForm/register.css'
import { UserOutlined,
         PhoneOutlined,
         MailOutlined,
         LockOutlined} from '@ant-design/icons';
import google from '../RegistrationForm/google.svg'
import facebook from '../RegistrationForm/facebook.svg'
import img1 from '../RegistrationForm/1.svg'
import back from '../RegistrationForm/back.jpg'

const {Title,Paragraph}=Typography;

const CollectionCreateForm = Form.create({ name: 'registration_form' })
(
  class extends React.Component {

    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is not match!');
      } else {
        callback();
      }
    };

    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value) {
        form.validateFields(['confirm_password'], { force: true });
      }
      callback();
    };


    render() {
      const {  onSubmit,  form } = this.props;
      const { getFieldDecorator } = form;

      return (
        <Card className="display_box">

              <Col span={10}>
                <div
                style={{
                  height:"740px",
                  width:"100%",
                  backgroundImage:"url("+back+")"
                }}>

                  <div style={{textAlign:"center"}}>
                      <Title
                      style={{
                        color:"#f9fcee",
                        fontSize:"100px"}}>
                                         <br/><br/>Hello
                            <Paragraph
                            strong={true}
                            style={{
                              color:"#f9fcee",
                              fontSize:"23px"}}>
                                  Enter your personal details <br/>and stay connect with us
                            </Paragraph>
                        </Title>
                  </div>
                </div>
              </Col>

              <Col span={2}/>

              <Col span={10}>
                <Row >
                  <Title
                   level={1}
                   strong={true}
                    style={{
                      textAlign:"center",
                      color:"#20373C",
                      marginTop:"10%"
                    }}>
                              Create Account
                  </Title>
                </Row>

                <div style={{textAlign:"center"}}>
                  <img style={{width:"40px",height:"40px",margin:"10px"}} src={google}/>
                  <img style={{width:"40px",height:"40px",margin:"10px"}} src={facebook}/>
                </div>

                <Row>
                  <Divider style={{color:"#838282",marginBottom:"7%"}}>
                    Or use your email for Registration
                  </Divider>
                </Row>
         
          <Row>
             <Form 
              layout="horizontal"
              onSubmit={onSubmit}>

                  <Form.Item
                  hasFeedback >
                    {getFieldDecorator('name',
                    {
                      rules: [
                        {
                          required: true,
                          message: 'Please enter your name'
                        },
                      ]
                    })
                    (<Input
                      placeholder="Full name"
                      prefix={<UserOutlined/>} />)}
                  </Form.Item>

                  <Form.Item
                  hasFeedback>
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
                    (<Input
                    type="textarea"
                    placeholder="Email"
                    prefix={<MailOutlined/>} />)}
                  </Form.Item>

                  <Form.Item
                  hasFeedback>
                    {getFieldDecorator('phone',
                    {
                      rules: [
                        { required: true,
                          message: 'Please input your phone number!'
                        },
                      ],
                    })
                    (<Input
                      placeholder="Mobile Number"
                      prefix={<PhoneOutlined/>}/>)
                    }
                  </Form.Item>

                  <Form.Item
                  hasFeedback >
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                      {
                        validator: this.validateToNextPassword,
                      },
                    ],
                  })(<Input.Password
                    placeholder="Password"
                    prefix={<LockOutlined/>}/>)}
                </Form.Item>

                <Form.Item
                hasFeedback >
                {getFieldDecorator('confirm_password', {
                    rules: [
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      {
                        validator: this.compareToFirstPassword,
                      },
                    ],
                  })
                  (<Input.Password
                    placeholder="Confirm Password"
                    prefix={<LockOutlined/>} />)}
                </Form.Item>

                <Form.Item>
                          
                          <Col span={18}>
                          <img src={img1} style={{height:"60%",width:"80%"}}/>
                          </Col>
                          
                          <Col span={6}>
                          <div style={{textAlign:"right"}}>
                          <Button
                            size="large"
                            shape="round"
                            type="primary"
                            htmlType="submit"
                            style={{marginTop:"20%"}}>
                              Register
                          </Button>
                          </div>
                          </Col>
                          
               </Form.Item>
           </Form>
          </Row>
        </Col>
        
        <Col span={2}/>
        </Card>
      );
    }
  },
);

export class RegisterForm extends Component {

      handleCreate = (e) => {
        e.preventDefault();
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
          console.log('Received values of form: ', values);
          form.resetFields();
        });
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

      render() {
        return (
          <div >
            <CollectionCreateForm
                wrappedComponentRef={this.saveFormRef}
                onSubmit={this.handleCreate}
                />
          </div>
        );
      }
}

export default RegisterForm
