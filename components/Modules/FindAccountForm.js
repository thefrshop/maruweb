import styles from './FindAccountForm.module.css';
import { Form, Input, Button, Checkbox } from 'antd';
import blindUserId from './function/blindUserId';

import axios from 'axios';

const FindUsernameForm = (props) => {
    const sendUserData = (userData) => {
        axios
            .post('web/findUser', userData)
            .then((res) => {
                for (let i in res.data) {
                    res.data[i].blindId = blindUserId(res.data[i].id);
                }

                Object.assign(userData, { ids: res.data });
                props.setUserData(userData);
                props.setStep(2);
            })
            .catch((err) => {
                console.log(err);
            });

        // props.setUserData(userDate.concat(res.data));
    };

    const onFinish = (values) => {
        sendUserData(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            className={styles.FindAccountForm}
            name="basic"
            labelCol={{
                span: 7,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                name: '정재훈',
                email: 'jh97515@naver.com',
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
        >
            <p>회원가입 시 입력했던 이름와 이메일을 입력해주세요.</p>
            <Form.Item
                label="이름"
                name="name"
                rules={[
                    {
                        required: true,
                        message: '이름를 입력해주세요.',
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
                    아이디 찾기
                </Button>
            </Form.Item>
        </Form>
    );
};

export default FindUsernameForm;
