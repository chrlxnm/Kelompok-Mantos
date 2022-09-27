import { Form, Input } from 'antd';

import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: { xs: 24 , sm: 24 , md: 24, lg: 8, xl:8 },
        wrapperCol: { xs: 24 , sm: 24 , md: 22, lg: 14, xl:14 }
      };
  
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Card>
            <h1>Login Page</h1>
                <Form 
                        {...formItemLayout}
                        form={form} name='form-login'>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default LoginPage;

const Card = styled.div`
    width: 50%;
    border-radius: 16px;
    padding: 16px;
    box-shadow: 0px 3px 6px 3px rgb(0 148 255 / 10%);
`