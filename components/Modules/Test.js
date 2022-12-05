import React, { Component } from 'react';

import axios from 'axios';

import { Space, Form, Input, Select, DatePicker, Row, Col, Typography, Button } from 'antd';
import zxcvbn from 'zxcvbn';
import moment from 'moment';

// import { Button, Txt } from '.';

import styled from './signup_dynamic.module.css';
import styles from './signup_static.module.css';

const { Option } = Select;
const { Text } = Typography;

export default class SignUpStep2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            /* 아이디 */
            id: '',
            IsId: 'notcheck',
            IsIdText: '',
            IsIdTextColor: '',
            IdValidated: '',

            /* 비밀번호 */
            FirstPass: '',
            IsPass: false,
            IsPassText: '',
            IsPassColor: '',
            Passvalidated: '',

            /* 비밀번호 확인 */
            password: '',
            IsPass2: false,
            IsPass2Text: '',
            IsPass2Color: '',
            Pass2validated: '',

            /* 이메일 */
            email: '',
            IsEmail: false,
            IsEmailText: '',
            IsEmailColor: '',
            Emailvalidated: '',

            /* 성별 */
            member_sex: '남성',
            Sexvalidated: '',

            /* 거주지 */
            member_city: '구미',
            Cityvalidated: '',

            /* 생년월일 */
            IsBirth: false,
            member_birth: moment(),
            Birthvalidated: '',
        };
    }

    handleSubmit = (event) => {
        const { IsId, IsIdText, IsIdTextColor, IsPass, IsPass2, IsEmail, IsBirth } = this.state;
        const { id, password, email, member_sex, member_city, member_birth } = this.state;
        event.preventDefault();

        if (IsId === 'ok' && IsEmail && IsPass && IsPass2 && IsBirth) {
            console.log('success');
        } else {
            console.log('fail');
            event.stopPropagation();
            this.setState({
                IdValidated: IsId === 'ok' ? 'success' : 'error',
                Passvalidated: IsPass ? 'success' : 'error',
                Pass2validated: IsPass2 ? 'success' : 'error',
                Emailvalidated: IsEmail ? 'success' : 'error',
                Birthvalidated: IsBirth ? 'success' : 'error',
                IsIdText: IsId === 'ok' ? IsIdText : '중복 체크를 해주세요.',
                IsIdTextColor: IsId === 'ok' ? IsIdTextColor : 'red',
            });
        }
    };

    onChangeID = (event) => {
        const id = event.currentTarget.value;
        this.setState({
            id: id,
        });
    };

    IDCheck = () => {
        //id axios 중복 체크
        this.setState({ IsId: 'ok', IsIdText: '사용 가능합니다.', IsIdTextColor: 'green' });
        //this.setState({ IsId: 'fail', IsIdText: '중복된 아이디입니다.', IsIdTextColor: 'red' });
    };

    onChangeEmail = (event) => {
        const { Emailvalidated } = this.state;

        const email = event.currentTarget.value;

        if (!isEmailTest(email)) {
            this.setState({
                IsEmail: false,
                IsEmailText: '이메일 형식으로 입력하세요',
                IsEmailColor: 'red',
                email,
            });
        } else {
            //axios 이메일 중복 체크
            this.setState({
                email,
                IsEmail: true,
                IsEmailText: '사용 가능합니다.',
                IsEmailColor: 'green',
                Emailvalidated: Emailvalidated === '' ? '' : 'success',
            });
        }
    };

    onFirstPass = (event) => {
        const pass = event.currentTarget.value;

        this.setScore(pass).then((value) => {
            this.setState({
                ...value,
                FirstPass: pass,
            });
        });
    };

    onLasttPass = (event) => {
        const { Pass2validated } = this.state;

        const pass = event.currentTarget.value;

        if (this.state.FirstPass === pass) {
            this.setState({
                password: pass,
                IsPass2: true,
                IsPass2Text: '일치 합니다.',
                IsPass2Color: 'green',
                password: pass,
                Pass2validated: Pass2validated === '' ? '' : 'success',
            });
        } else {
            this.setState({
                IsPass2: false,
                IsPass2Text: '비밀번호가 일치하지 않습니다.',
                IsPass2Color: 'red',
                password: pass,
            });
        }
    };

    setScore = (password) => {
        return new Promise((resolve) => {
            const { Passvalidated } = this.state;
            const minLength = 8;

            let Words = ['짧음', '취약', '만족', '좋음', '강력'];
            let IsPassColor = ['#ef4836', '#ef4836', '#f6b44d', '#2b90ef', '#0a0'];
            let score = 1;

            if (password.length >= minLength) {
                score = zxcvbn(password, []).score;

                resolve({
                    IsPass: true,
                    score: score,
                    IsPassText: Words[score],
                    IsPassColor: IsPassColor[score],
                    Passvalidated: Passvalidated === '' ? '' : 'success',
                });
            } else {
                resolve({
                    IsPass: false,
                    score: 0,
                    IsPassText: Words[0],
                    IsPassColor: IsPassColor[0],
                });
            }
        });
    };

    onChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value,
        });
    };

    render() {
        const {
            /* 아이디 */
            id,
            IsId,
            IsIdText,
            IsIdTextColor,
            IdValidated,

            /* 비밀번호 */
            FirstPass,
            IsPass,
            IsPassText,
            IsPassColor,
            Passvalidated,

            /* 비밀번호 확인 */
            password,
            IsPass2,
            IsPass2Text,
            IsPass2Color,
            Pass2validated,

            /* 이메일 */
            email,
            IsEmail,
            IsEmailText,
            IsEmailColor,
            Emailvalidated,

            /* 성별 */
            member_sex,
            Sexvalidated,

            /* 거주지 */
            member_city,
            Cityvalidated,

            /* 생년월일 */
            IsBirth,
            member_birth,
            Birthvalidated,
        } = this.state;

        return (
            <Space className={[styled.SignForm, styled.step2_Contain].join(' ')} direction="vertical">
                {/* <Space direction="vertical"> */}
                <Text level={3} color="#316db1" strong>
                    아이디 / 비밀번호
                </Text>
                <Form colon={false}>
                    <Form.Item
                        label={<Text>아이디</Text>}
                        required
                        validateStatus={IdValidated}
                        help={
                            <Text level="tag" color={IsIdTextColor}>
                                {IsIdText}
                            </Text>
                        }
                    >
                        <Row gutter={8}>
                            <Col span={18}>
                                <Input name="id" type="text" placeholder="아이디" disabled={IsId === 'ok'} value={id} onChange={this.onChangeID} />
                            </Col>
                            <Col span={6}>
                                {IsId === 'ok' ? (
                                    <Button
                                        className={styles.FullWdithCenter}
                                        onClick={() => {
                                            this.setState({
                                                id: '',
                                                IsId: 'notcheck',
                                                IsIdText: '',
                                                IsIdTextColor: '',
                                                IdValidated: '',
                                            });
                                        }}
                                    >
                                        다시 입력
                                    </Button>
                                ) : (
                                    <Button className={styles.FullWdithCenter} type="full" onClick={this.IDCheck}>
                                        {/* <Button type="full" onClick={this.IDCheck}> */}
                                        중복 체크
                                    </Button>
                                )}
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        label={<Text>비밀번호</Text>}
                        required
                        validateStatus={Passvalidated}
                        hasFeedback
                        help={
                            <Text level="tag" color={IsPassColor}>
                                {IsPassText}
                            </Text>
                        }
                    >
                        <Input
                            autoComplete="new-password"
                            name="password"
                            type="password"
                            placeholder="패스워드"
                            value={FirstPass}
                            onChange={this.onFirstPass}
                        />
                    </Form.Item>

                    <Form.Item
                        label={<Text>비밀번호 확인</Text>}
                        required
                        validateStatus={Pass2validated}
                        hasFeedback
                        help={
                            <Text level="tag" color={IsPass2Color}>
                                {IsPass2Text}
                            </Text>
                        }
                    >
                        <Input
                            autoComplete="new-password"
                            name="password2"
                            type="password"
                            placeholder="패스워드 확인"
                            disabled={!IsPass}
                            value={password}
                            onChange={this.onLasttPass}
                        />
                    </Form.Item>
                </Form>
                <Text level={3} color="#316db1" strong>
                    상세 정보
                </Text>
                <Form noValidate onSubmitCapture={this.handleSubmit} colon={false}>
                    <Form.Item
                        label={<Text>이메일</Text>}
                        required
                        validateStatus={Emailvalidated}
                        hasFeedback
                        help={
                            <Text level="tag" color={IsEmailColor}>
                                {IsEmailText}
                            </Text>
                        }
                    >
                        <Input name="email" type="text" placeholder="이메일" value={email} onChange={this.onChangeEmail} />
                    </Form.Item>

                    <Form.Item label={<Text>성별</Text>} required>
                        <Select
                            value={member_sex}
                            onChange={(member_sex) => {
                                this.setState({
                                    member_sex,
                                });
                            }}
                        >
                            <Option value="남성">남성</Option>
                            <Option value="여성">여성</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item label={<Text>거주지</Text>} required>
                        <Select
                            value={member_city}
                            onChange={(member_city) => {
                                this.setState({
                                    member_city,
                                });
                            }}
                        >
                            <Option value="구미">구미</Option>
                            <Option value="구미 외 지역">구미 외 지역</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label={<Text>생년월일</Text>}
                        required
                        validateStatus={Birthvalidated}
                        help={
                            Birthvalidated === 'error' && (
                                <Text level="tag" color={'red'}>
                                    생년월일을 체크해주세요.
                                </Text>
                            )
                        }
                    >
                        <DatePicker
                            style={{ width: '100%' }}
                            value={member_birth}
                            onChange={(member_birth) => {
                                this.setState({
                                    IsBirth: true,
                                    member_birth,
                                    Birthvalidated: Birthvalidated === '' ? '' : 'success',
                                });
                            }}
                        />
                    </Form.Item>

                    <div className={styles.TwoButtonContain}>
                        {/* <div> */}
                        <Button type="full" htmlType="submit">
                            다음
                        </Button>
                    </div>
                </Form>
            </Space>
        );
    }
}

export const isEmailTest = (email) => {
    var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    return pattern.test(email);
};
