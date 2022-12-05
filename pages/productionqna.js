import React from 'react';

import { Divider, Form, Input, Modal, InputNumber, Button, Checkbox, Select, Switch, Radio, Slider, Upload, Rate, Row, Col } from 'antd';
import pstyles from './page.module.css';

const { Option } = Select;
const { warning, success } = Modal;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkNick: false };
    }

    requestRegisterInquiry = () => {};

    onFinish = (values) => {
        if (this.state.checkNick) {
            if (this.props.authuser && this.props.userinfo.email_auth) {
                success({
                    content: '등록되었습니다.',
                });
            } else if (this.props.authuser && !this.props.userinfo.email_auth) {
                // 제작문의 요청 로직 작성
                warning({
                    title: '이메일 인증 후 시도해 주세요.',
                });
            } else {
                warning({
                    title: '로그인 후 시도해주세요.',
                });
            }
        } else {
            warning({
                title: '개인정보 수집 및 이용에 대한 안내 동의를해주세요.',
            });
        }
    };

    checkNick = (values) => {
        console.log(values);
    };

    onCheckboxChange = (e) => {
        this.setState({ checkNick: e.target.checked });
    };

    render() {
        return (
            <div className={pstyles.Section}>
                <div className={pstyles.Title}> 제작 문의</div>
                <Divider />
                <br />

                <Form
                    {...layout}
                    name="nest-messages"
                    initialValues={{
                        switch1: false,
                        switch2: false,
                        switch3: false,
                        // user: { name: '정재훈', phone: '01051292239', email: 'jh97515@naver.com' },
                        // productionType: 'm1',
                    }}
                    onFinish={this.onFinish}
                    validateMessages={validateMessages}
                >
                    <Form.Item label="개인정보 취급방침">
                        <textarea defaultValue={policy} style={{ width: '100%', height: '150px' }} />
                        <Checkbox checked={this.state.checkNick} onChange={this.onCheckboxChange}>
                            동의 합니다.
                        </Checkbox>
                    </Form.Item>

                    <Form.Item name={['user', 'name']} label="이름" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    {/* <Form.Item name={[ 'user', 'phone' ]} label="연락처" rules={[ { required: true, type: 'number' } ]}> */}
                    <Form.Item name={['user', 'phone']} label="연락처" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="이메일" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="productionType"
                        label="제작형태"
                        rules={[
                            {
                                required: true,
                                message: '제작 하고자 하는 영상 타입을 입력하세요',
                                type: 'array',
                            },
                        ]}
                    >
                        <Select mode="multiple" placeholder="제작 하고자 하는 영상 타입">
                            <Option value="m1">일반 편집</Option>
                            <Option value="m2">유튜브 </Option>
                            <Option value="m3">뮤직비디오</Option>
                            <Option value="m4">자막 및 CG</Option>
                            <Option value="m5">모션그래픽</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="switch1" label="기획" valuePropName="checked">
                        <Switch defaultChecked checkedChildren="필요함" unCheckedChildren="필요없음" />
                    </Form.Item>
                    <Form.Item name="switch2" label="촬영" valuePropName="checked">
                        <Switch defaultChecked checkedChildren="필요함" unCheckedChildren="필요없음" />
                    </Form.Item>
                    <Form.Item name="switch3" label="나레이션" valuePropName="checked">
                        <Switch checkedChildren="필요" unCheckedChildren="필요없음" />
                    </Form.Item>

                    <Form.Item name={['user', 'decs']} label="상세내용">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 12 }}>
                        <Button type="primary" htmlType="submit">
                            문의 등록
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const layout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const policy = `1. 개인정보의 수집 및 이용 목적
가맹 관련 문의 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
2. 처리하는 개인정보 항목
- 필수항목 : 이름, 연락처 (접속 IP 정보, 쿠키, 서비스 이용 기록, 접속 로그)
- 선택항목 : 이메일
3. 개인정보의 처리 및 보유 기간
① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.
② 개인정보의 보유 기간은 5년입니다.`;
