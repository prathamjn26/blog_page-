import React, { Component } from 'react'
import { Button, Modal, Form, Input, Select,Tooltip } from 'antd';
import {NotificationOutlined} from '@ant-design/icons'

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })
(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      const {Option}=Select;
      return (
        <Modal
          visible={visible}
          okText="Subscribe"
          onCancel={onCancel}
          onOk={onCreate}
        >
           <h1 style={{textAlign:"center",color:"rgb(62, 66, 68)"}}>
               Subscribe For More Updates
            </h1>

          <Form layout="vertical">
            <Form.Item label="Name">
              {getFieldDecorator('name', 
              {
                rules: [{ required: true, message: 'Please enter your name' }],
              })
              (<Input />)}
            </Form.Item>

            <Form.Item label="Email">
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
              (<Input type="textarea" />)}
            </Form.Item>

            <Form.Item label="Category">
              {getFieldDecorator('category', 
              {
                rules: [{ required: true, message: 'Please Select a Category' }],
              })
              (
                <Select
                mode="multiple"
                placeholder="Please select multiple categories">
                <Option value="java">Java</Option>
                <Option value="python">Python</Option>
                <Option value="Machinelearning">Machine Learning</Option>
                <Option value="dsa">DSA</Option>
                <Option value="c++">C++</Option>
                <Option value="c">C</Option>
              </Select>
              )}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  },
);

export class FormTst extends Component {
    state = {
        visible: false,
      };
    
      showModal = () => {
        this.setState({ visible: true });
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    
      handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          form.resetFields();
          this.setState({ visible: false });
        });
      };
    
      saveFormRef = formRef => {
        this.formRef = formRef;
      };
    
      render() {
        return (
          <div>            
            <Tooltip placement="top" title="Subscribe">
                    <Button 
                    type="primary" 
                    size="large" 
                    shape="circle"  
                    style={{position:"fixed",bottom:"50px",right:"40px",boxShadow:"5px 5px 5px  #888888"}}
                    onClick={this.showModal}
                    >
                        <NotificationOutlined/>
                    </Button>
            </Tooltip>

            <CollectionCreateForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
            />
          </div>
        );
      }
    }
    
export default FormTst
