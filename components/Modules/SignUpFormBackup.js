import React, { useState } from 'react';
import styles from './SignUpForm.module.css';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

const inputBoxStyle = {
    width: '400px',
    height: '55px',
};

const SignUpForm = () => {
    // State
    const [form] = Form.useForm();
    const [emailBtnState, setEmailBtnState] = useState(false);
    const [passUsername, setPassUsername] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const router = useRouter();

    // 회원가입 폼 데이터 서버로 전송
    const createMember = (user_data) => {
        axios
            .post('web/create_member', user_data)
            .then((res) => {
                console.log(`[Create Member]: ${res.data}`);
            })
            .catch((err) => console.log(`[Create Member]: ${err}`));
    };
    // 서버에 아이디 요청
    const getUsername = (data) => {
        data = { username: data };
        return new Promise((resolve, reject) => {
            axios
                .post('web/checkUsername', data)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err) => reject(err));
        });
    };

    // 아이디 중복검사
    const usernameDuplicateCheck = (username) => {
        // console.log(`username:${username}`);
        if (passUsername) {
            getUsername(username)
                .then((result) => {
                    // console.log(`Result: ${JSON.stringify(result)}`);
                    if (result.id === username) {
                        alert('이미 존재하는 아이디입니다.');
                    } else {
                        alert('사용 가능한 아이디입니다.');
                        setIsChecked(true);
                    }
                })
                .catch((err) => console.log(`[DuplicateCheck Error]: ${err}`));
        } else {
            console.log('유효성 검사 실패');
        }
    };

    // 인증이메일 전송
    const emailAuthentication = (data) => {
        axios
            .post('/web/emailAuthentication', data)
            .then((res) => {
                alert(res.data);
            })
            .catch((err) => {
                console.log(err); // for Debug
            });
    };

    // 폼 유효성 검사
    // Username Check
    const validateUsername = (_, username) => {
        if (!username) {
            setPassUsername(false);
            return Promise.reject(new Error('필수 정보입니다.'));
        }
        if (/\s/.test(username)) {
            setPassUsername(false);
            return Promise.reject(new Error('공백은 포함 할 수 없습니다.'));
        }
        if (!/^[a-zA-Z0-9]{6,12}$/.test(username)) {
            setPassUsername(false);
            return Promise.reject(new Error('아이디는 6~12자리 이하 문자 또는 숫자로 구성해야 합니다.'));
        }

        setPassUsername(true);
        return Promise.resolve(1234);
    };

    // Password Check
    const validatePassword = (_, password) => {
        if (!password) {
            return Promise.reject(new Error('필수 정보입니다.'));
        }

        if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password)) {
            return Promise.reject(new Error('비밀번호는 8~25자리의 영문자 숫자 특수문자 조합으로 사용해야 합니다.'));
        }
        return Promise.resolve();
    };

    // PhoneNumber Check
    const validatePhone = (_, phone) => {
        if (!phone) {
            return Promise.reject(new Error('필수 정보입니다.'));
        }
        if (!/^01[0-9]{1}[0-9]{3,4}[0-9]{4}/.test(phone)) {
            return Promise.reject(new Error('올바른 전화번호 형식이 아닙니다.'));
        }
        return Promise.resolve();
    };
    // Email Check
    const validateEmail = (_, email) => {
        if (!email) {
            return Promise.reject(new Error('필수 정보입니다.'));
        }

        if (!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(email)) {
            return Promise.reject(new Error('이메일 형식이 아닙니다.'));
        }

        return Promise.resolve();
    };

    const onFinish = (form_data) => {
        // console.log(`중복검사 유무: ${isChecked}`); // for Debug
        if (isChecked) {
            createMember(form_data);
            alert('가입이 완료되었습니다.');
            router.push('/');
        } else {
            alert('중복체크를 해주세요');
        }
    };

    return (
        <Form layout="vertical" form={form} name="signup" onFinish={onFinish} scrollToFirstError requiredMark={false}>
            <div style={{ display: 'flex' }}>
                <Form.Item name="username" label="아이디" rules={[{ validator: validateUsername }]}>
                    <Input style={inputBoxStyle} />
                </Form.Item>
                {/* <UsernameCheckModal style={{ width: '100px', height: '55px', marginLeft: '10px' }} /> */}
                <Button
                    className={styles.DuplicateCheckBtn}
                    // disabled={btnStatus}
                    onClick={() => usernameDuplicateCheck(form.getFieldValue('username'))}
                >
                    중복체크
                </Button>
            </div>

            <Form.Item name="password" label="비밀번호" rules={[{ validator: validatePassword }]}>
                <Input.Password style={inputBoxStyle} />
            </Form.Item>

            <Form.Item
                name="confirm"
                label="비밀번호 확인"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: '필수 정보입니다.',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(new Error('비밀번호가 동일하지 않습니다.'));
                        },
                    }),
                ]}
            >
                <Input.Password style={inputBoxStyle} />
            </Form.Item>

            <Form.Item
                name="name"
                label="이름"
                rules={[
                    {
                        required: true,
                        message: '필수 정보입니다.',
                        whitespace: true,
                    },
                ]}
            >
                <Input style={inputBoxStyle} />
            </Form.Item>
            <div style={{ display: 'flex' }}>
                <Form.Item name="email" label="E-mail" rules={[{ validator: validateEmail }]}>
                    <Input style={inputBoxStyle} />
                </Form.Item>
                <Button
                    className={styles.DuplicateCheckBtn}
                    disabled={emailBtnState}
                    onClick={() => emailAuthentication({ email: form.getFieldValue('email') })}
                >
                    이메일 인증
                </Button>
            </div>

            <Form.Item name="phone" label="휴대전화 (-제외)" rules={[{ validator: validatePhone }]}>
                <Input style={inputBoxStyle} maxLength={11} />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" style={inputBoxStyle}>
                    가입하기
                </Button>
            </Form.Item>
        </Form>
    );
};

export default SignUpForm;
