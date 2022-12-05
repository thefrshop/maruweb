import styles from './LoginForm.module.css';
import { Form, Input, Button, Checkbox, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';

const LoginForm = (props) => {
    const router = useRouter();

    const login = (userData) => {
        axios
            .post('/web/login', userData)
            .then((res) => {
                // props.SetAuthUser(res.data);
                props.SetLoginSuccess(res.data);
                router.push('/');
            })
            .catch((err) => {
                if (err.response.status === 401) {
                    alert(err.response.data.message);
                }
                console.log(err.response);
            });
    };

    const onFinish = (values) => {
        login(values);
    };
    LoginForm;

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            requiredMark={false}
            initialValues={{
                remember: false,
                id: 'jh97515',
                pw: 'qwer1234@',
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ width: '100%' }}
        >
            <Form.Item
                // label="아이디"
                name="id"
                style={{ margin: 0 }}
                rules={[
                    {
                        required: true,
                        message: '아이디를 입력해주세요.',
                    },
                ]}
            >
                <Input
                    placeholder="아이디"
                    prefix={<UserOutlined style={{ color: 'gray' }} />}
                    style={{ width: '350px', height: '50px', margin: 0 }}
                />
            </Form.Item>

            <Form.Item
                // label="비밀번호"
                name="pw"
                rules={[
                    {
                        required: true,
                        message: '비밀번호를 입력해주세요',
                    },
                ]}
            >
                <Input.Password
                    placeholder="비밀번호"
                    prefix={<LockOutlined style={{ color: 'gray' }} />}
                    style={{ width: '350px', height: '50px', margin: 0 }}
                />
            </Form.Item>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '350px', height: '50px' }}>
                        로그인
                    </Button>
                </Form.Item>
                <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>로그인 상태 유지</Checkbox>
                </Form.Item>
            </div>
            <div className={styles.FindSection}>
                <Link href="/findAccount">
                    <a>아이디 찾기 </a>
                </Link>
                <Divider type="vertical" />
                <Link href="/findPassword">
                    <a>비밀번호 찾기</a>
                </Link>
            </div>
        </Form>
    );
};

export default LoginForm;
