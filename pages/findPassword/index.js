import React from 'react';

import { Button, Input, Form, Modal } from 'antd';
import axios from 'axios';
import styles from './findPassword.module.css';
import IdList from '../../components/Modules/IdList';

const { success, error } = Modal;

export default class findPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userData: [], id: [], step: 1 };
    }

    componentDidMount() {}

    onFinish = (values) => {
        this.requestFindPassword(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    requestFindPassword = (userData) => {
        axios
            .post('/web/findPassword', userData)
            .then((res) => {
                //
                success({
                    okText: '확인',
                    content: res.data.split('\n').map((item, index) => <div key={index}>{item}</div>),
                });
            })
            .catch((err) => {
                error({
                    // title: 'This is an error message',
                    content: err.response.data,
                });
            });
    };

    render() {
        return (
            <div className={styles.Contain}>
                <img className={styles.Logo} src="resource/images/maru_logo.png" alt="logo" />
                <div className={styles.FromArea}>
                    <h2>비밀번호 찾기</h2>
                    <Form
                        className={styles.FindAccountForm}
                        name="basic"
                        labelCol={{
                            span: 7,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        // initialValues={{
                        //     id: 'jh97515',
                        //     email: 'jaehoon975@gmail.com',
                        // }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        autoComplete="off"
                        requiredMark={false}
                    >
                        <p>회원가입 시 입력했던 아이디와 이메일을 입력해주세요.</p>
                        <Form.Item
                            label="아이디"
                            name="id"
                            rules={[
                                {
                                    required: true,
                                    message: '아이디를 입력해주세요.',
                                },
                            ]}
                            style={{ marginBottom: 0 }}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="이메일"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: '이메일을 입력해주세요.',
                                },
                            ]}
                            style={{ marginBottom: 0 }}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                비밀번호 찾기
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
