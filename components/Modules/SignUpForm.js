import React, { useState, useEffect } from 'react';

import styles from './SignUpForm.module.css';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/router';

const inputBoxStyle = {
    width: '400px',
    height: '55px',
};

const ItemWrapper = {
    display: 'flex',
};

const SignUpForm = (props) => {
    // State
    const [form] = Form.useForm();

    const [passUsername, setPassUsername] = useState(false);
    const [passEmail, setPassEmail] = useState('notcheck');
    const [isChecked, setIsChecked] = useState(false);

    // 회원가입 폼 데이터 서버로 전송
    const createMember = (user_data) => {
        return new Promise((resolve, reject) => {
            axios
                .post('web/createMember', user_data)
                .then((res) => {
                    console.log(`[Create Member]: ${res.data}`);
                    resolve();
                })
                .catch((err) => {
                    console.log(`[Create Member]: ${err}`);
                    reject();
                });
        });
    };
    // 서버에 아이디 요청
    const getUsername = (data) => {
        data = { id: data };
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
    const usernameDuplicateCheck = (id) => {
        if (passUsername) {
            getUsername(id)
                .then((result) => {
                    if (result.id === id) {
                        console.log(result);
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

    // 폼 유효성 검사
    // Username Check
    const validateUsername = (_, id) => {
        if (!id) {
            return Promise.reject(new Error('필수 정보입니다.'));
        }
        if (/\s/.test(id)) {
            return Promise.reject(new Error('공백은 포함 할 수 없습니다.'));
        }
        if (!/^[a-zA-Z0-9]{6,12}$/.test(id)) {
            return Promise.reject(new Error('6~12자리 이하 문자 또는 숫자로 구성해야 합니다.'));
        }

        setPassUsername(true);
        return Promise.resolve();
    };

    // Password Check
    const validatePassword = (_, pw) => {
        if (!pw) {
            return Promise.reject(new Error('필수 정보입니다.'));
        }

        if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(pw)) {
            return Promise.reject(new Error('8~25자리의 영문자 숫자 특수문자 조합으로 구성해야 합니다.'));
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

    const onFinish = (form_data, email_check) => {
        if (email_check === 'ok' && isChecked) {
            createMember(form_data).then(() => {
                props.setUserData({ id: form.getFieldValue('id'), email: form.getFieldValue('email') });
                props.onStep(3);
            });
        } else {
            if (email_check === 'fail') {
                form.setFields([
                    {
                        name: 'email',
                        errors: ['이미 사용중인 이메일 입니다.'],
                    },
                ]);
            }
            if (!isChecked) {
                form.setFields([
                    {
                        name: 'id',
                        errors: ['중복 체크를 해주세요.'],
                    },
                ]);
            }
        }
    };

    const onBlurUsername = () => {
        if (form.getFieldError('id').length === 0) {
            setPassUsername(true);
        } else {
            setPassUsername(false);
        }
    };

    const onBlurEmail = () => {
        if (form.getFieldError('email').length === 0) {
            axios.post('/web/checkEmail', { email: form.getFieldValue('email') }).then((res) => {
                if (res.data) {
                    form.setFields([
                        {
                            name: 'email',
                            errors: ['이미 사용중인 이메일 입니다.'],
                        },
                    ]);
                    // 이메일이 이미 존재하는 경우
                    setPassEmail('fail');
                } else {
                    // 이메일이 존재하지 않는 경우
                    setPassEmail('ok');
                }
            });
        }
    };

    return (
        <Form
            layout="vertical"
            form={form}
            name="signup"
            initialValues={{ pw: 'qwer1234@', confirm: 'qwer1234@' }}
            onFinish={(e) => {
                if (passEmail === 'notcheck') {
                    axios.post('/web/checkEmail', { email: form.getFieldValue('email') }).then((res) => {
                        onFinish(e, res.data ? 'fail' : 'ok');
                    });
                } else {
                    onFinish(e, passEmail);
                }
            }}
            scrollToFirstError
            requiredMark={false}
        >
            <div style={{ display: 'flex' }}>
                <Form.Item style={ItemWrapper} name="id" label="아이디" hasFeedback rules={[{ validator: validateUsername }]}>
                    <Input style={inputBoxStyle} onBlur={onBlurUsername} disabled={isChecked} />
                </Form.Item>
                {/* <UsernameCheckModal style={{ width: '100px', height: '55px', marginLeft: '10px' }} /> */}
                {!isChecked ? (
                    <Button
                        className={styles.DuplicateCheckBtn}
                        // disabled={btnStatus}
                        onClick={() => usernameDuplicateCheck(form.getFieldValue('id'))}
                    >
                        중복체크
                    </Button>
                ) : (
                    <Button
                        className={styles.DuplicateCheckBtn}
                        // disabled={btnStatus}
                        onClick={() => setIsChecked(false)}
                    >
                        재설정
                    </Button>
                )}
            </div>
            <div style={ItemWrapper}>
                <Form.Item name="pw" label="비밀번호" rules={[{ validator: validatePassword }]} hasFeedback>
                    <Input.Password style={inputBoxStyle} />
                </Form.Item>
            </div>
            <div style={ItemWrapper}>
                <Form.Item
                    name="confirm"
                    label="비밀번호 확인"
                    dependencies={['pw']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '필수 정보입니다.',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('pw') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('비밀번호가 동일하지 않습니다.'));
                            },
                        }),
                    ]}
                >
                    <Input.Password style={inputBoxStyle} />
                </Form.Item>
            </div>
            <div style={ItemWrapper}>
                <Form.Item
                    style={{ display: 'flex' }}
                    name="name"
                    label="이름"
                    hasFeedback
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
            </div>
            <div style={{ display: 'flex' }}>
                <Form.Item style={{ display: 'flex' }} name="email" label="E-mail" hasFeedback rules={[{ validator: validateEmail }]}>
                    <Input style={inputBoxStyle} onBlur={onBlurEmail} />
                </Form.Item>
            </div>
            <div style={ItemWrapper}>
                <Form.Item style={{ display: 'flex' }} name="phone" label="휴대전화 (-제외)" hasFeedback rules={[{ validator: validatePhone }]}>
                    <Input style={inputBoxStyle} maxLength={11} />
                </Form.Item>
            </div>
            <div style={ItemWrapper}>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={inputBoxStyle} disabled={false}>
                        가입하기
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default SignUpForm;
