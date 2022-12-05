import React from 'react';

import { Button, Form } from 'antd';
import moment from 'moment';

import { CheckCircleOutlined, UpSquareOutlined } from '@ant-design/icons';

import { AllForm, PopupMsg } from '../Modules';

export default class Comments extends React.Component {
	constructor(props) {
		super(props);
		this.popup = {
			is_popup_msg: false,
			popup_mode: 'yesno',
			popup_loading: false,
			popup_onHide: () => {
				this.setState({ is_popup_msg: false });
			},
			ok: () => {
				this.setState({ is_popup_msg: false });
			}
		};

		this.state = {
			...this.popup,
			QandAData: {
				question: '',
				secret: false
			},

			isAnswer: null,
			Answer: null,
			AnswerData: {
				answer: ''
			}
		};
	}

	QandAAnswerList = (List) => {
		let list = [];
		List.forEach((item, index) => {
			list.push(
				<div
					key={index}
					className="Row"
					style={{
						paddingBottom: 15,
						alignItems: 'center'
					}}
				>
					<div style={{ flex: 1 }} />
					<div style={{ flex: 3 }}>
						<div
							className="Row"
							style={{
								flex: 1,
								color: item.secret ? '#999' : '#000',
								alignItems: 'center'
							}}
						>
							<CheckCircleOutlined style={{ fontSize: 16, marginRight: 5 }} />
							<div style={{ flex: 1 }}>
								{item.secret ? item.member_profile_id === this.props.userinfo.member_profile_id ? (
									item.memo
								) : (
									'비밀 질문 답변입니다.'
								) : (
									item.memo
								)}
							</div>
						</div>
					</div>
					<div style={{ marginLeft: 10 }}>{item.date}</div>
				</div>
			);
		});
		return list;
	};

	AnswerSend = () => {
		if (this.state.AnswerData.answer === '') {
			this.setState({
				is_popup_msg: true,
				popup_mode: 'msg',
				Message: '답글을 입력해주세요.',
				Message2: ''
			});
		} else {
			this.props.onAnswerSend(
				{
					date: moment().format('YYYY-MM-DD HH:mm:ss'),
					secret: this.props.Data[this.state.Answer].secret,
					memo: this.state.AnswerData.answer,
					member_profile_id: this.props.userinfo.member_profile_id
				},
				this.state.Answer
			);
			this.setState({
				Answer: null,
				AnswerData: { answer: '' },
				is_popup_msg: true,
				popup_mode: 'msg',
				Message: '답글을 작성하였습니다.',
				Message2: ''
			});
		}
	};

	QandAList = () => {
		let list = [];
		this.props.Data.forEach((item, index) => {
			list.push(
				<div key={index}>
					<div
						className="Row"
						style={{
							paddingBottom: 15,
							alignItems: 'center'
						}}
					>
						<div style={{ flex: 1, justifyContent: 'center' }}>
							{item.secret && (
								<UpSquareOutlined style={{ fontSize: 16, marginRight: 5, color: '#999' }} />
							)}
							{item.name}
						</div>
						<div style={{ flex: 3 }}>
							<div
								className="Row"
								style={{
									flex: 1,
									color: item.secret ? '#999' : '#000',
									alignItems: 'center',
									cursor: this.state.isAnswer === index && 'pointer'
								}}
								onMouseOver={() => {
									if (item.member_profile_id === this.props.userinfo.member_profile_id)
										this.setState({
											isAnswer: index
										});
								}}
								onMouseLeave={() => {
									if (item.member_profile_id === this.props.userinfo.member_profile_id)
										this.setState({
											isAnswer: null
										});
								}}
								onClick={() => {
									if (item.member_profile_id === this.props.userinfo.member_profile_id)
										this.setState({
											Answer:
												this.state.Answer === null || this.state.Answer !== index ? index : null
										});
								}}
							>
								<div style={{ flex: 1 }}>
									{item.secret ? item.member_profile_id === this.props.userinfo.member_profile_id ? (
										item.memo
									) : (
										'비밀 질문입니다.'
									) : (
										item.memo
									)}
								</div>
							</div>
						</div>
						<div style={{ marginLeft: 10 }}>{item.date}</div>
					</div>
					{this.QandAAnswerList(item.Answer)}
					{this.state.Answer !== index &&
					this.state.isAnswer === index && (
						<div
							className="Row"
							style={{
								paddingBottom: 15,
								alignItems: 'center'
							}}
						>
							<div style={{ flex: 1 }} />
							<div className="Row" style={{ flex: 4, color: '#000', margin: 5, alignItems: 'center' }}>
								<UpSquareOutlined style={{ fontSize: 16, marginRight: 5 }} />
								답글
							</div>
						</div>
					)}
					{this.state.Answer === index && (
						<div
							className="Row"
							style={{
								paddingBottom: 15,
								alignItems: 'center'
							}}
						>
							<div style={{ flex: 1 }} />
							<div className="Row" style={{ flex: 4, color: '#000', margin: 5, alignItems: 'center' }}>
								<UpSquareOutlined style={{ fontSize: 16, marginRight: 5 }} />
								<AllForm
									Data={this.state.AnswerData}
									FormData={AnswerForm}
									onChange={(AnswerData) => {
										this.setState({
											AnswerData
										});
									}}
								/>

								<Button className="FullBtn" onClick={() => this.AnswerSend()}>
									보내기
								</Button>
							</div>
						</div>
					)}
				</div>
			);
		});
		return list;
	};

	Send = () => {
		const { QandAData } = this.state;
		if (QandAData.question.length === 0) {
			this.setState({
				is_popup_msg: true,
				popup_mode: 'msg',
				Message: '질문을 작성해주세요.',
				Message2: ``
			});
		} else {
			this.setState({
				QandAData: {
					question: '',
					secret: false
				},

				is_popup_msg: true,
				popup_mode: 'msg',
				Message: 'QandA를 작성하였습니다.',
				Message2: ''
			});
			this.props.onSend({
				memo: QandAData.question,
				secret: QandAData.secret,
				name: '민우',
				date: moment().format('YYYY-MM-DD HH:mm:ss'),
				member_profile_id: this.props.userinfo.member_profile_id,
				Answer: []
			});
		}
	};

	QandAList = () => {
		let list = [];
		this.props.Data.forEach((item, index) => {
			list.push(
				<div key={index}>
					<div
						className="Row"
						style={{
							paddingBottom: 15,
							alignItems: 'center'
						}}
					>
						<div style={{ flex: 1, justifyContent: 'center' }}>
							{item.secret && (
								<UpSquareOutlined style={{ fontSize: 16, marginRight: 5, color: '#999' }} />
							)}
							{item.name}
						</div>
						<div style={{ flex: 3 }}>
							<div
								className="Row"
								style={{
									flex: 1,
									color: item.secret ? '#999' : '#000',
									alignItems: 'center',
									cursor: this.state.isAnswer === index && 'pointer'
								}}
								onMouseOver={() => {
									if (item.member_profile_id === this.props.userinfo.member_profile_id)
										this.setState({
											isAnswer: index
										});
								}}
								onMouseLeave={() => {
									if (item.member_profile_id === this.props.userinfo.member_profile_id)
										this.setState({
											isAnswer: null
										});
								}}
								onClick={() => {
									if (item.member_profile_id === this.props.userinfo.member_profile_id)
										this.setState({
											Answer:
												this.state.Answer === null || this.state.Answer !== index ? index : null
										});
								}}
							>
								<div style={{ flex: 1 }}>
									{item.secret ? item.member_profile_id === this.props.userinfo.member_profile_id ? (
										item.memo
									) : (
										'비밀 질문입니다.'
									) : (
										item.memo
									)}
								</div>
							</div>
						</div>
						<div style={{ marginLeft: 10 }}>{item.date}</div>
					</div>
					{this.QandAAnswerList(item.Answer)}
					{this.state.Answer !== index &&
					this.state.isAnswer === index && (
						<div
							className="Row"
							style={{
								paddingBottom: 15,
								alignItems: 'center'
							}}
						>
							<div style={{ flex: 1 }} />
							<div className="Row" style={{ flex: 4, color: '#000', margin: 5, alignItems: 'center' }}>
								<UpSquareOutlined style={{ fontSize: 16, marginRight: 5 }} />
								답글
							</div>
						</div>
					)}
					{this.state.Answer === index && (
						<div
							className="Row"
							style={{
								paddingBottom: 15,
								alignItems: 'center'
							}}
						>
							<div style={{ flex: 1 }} />
							<div className="Row" style={{ flex: 4, color: '#000', margin: 5, alignItems: 'center' }}>
								<UpSquareOutlined style={{ fontSize: 16, marginRight: 5 }} />
								<AllForm
									Data={this.state.AnswerData}
									FormData={AnswerForm}
									onChange={(AnswerData) => {
										this.setState({
											AnswerData
										});
									}}
								/>

								<Button className="FullBtn" onClick={() => this.AnswerSend()}>
									보내기
								</Button>
							</div>
						</div>
					)}
				</div>
			);
		});
		return list;
	};

	render() {
		return (
			<div>
				<div style={{ borderTop: '2px solid #000', padding: 15, marginBottom: 15 }}>{this.QandAList()}</div>
				<AllForm
					Data={this.state.QandAData}
					FormData={FormView}
					onChange={(QandAData) => {
						this.setState({
							QandAData
						});
					}}
				/>
				<div className="OneButtonContain" style={{ marginBottom: 30 }}>
					<div className={[ 'Row', 'Center' ].join(' ')}>
						<Form.Check type="radio" style={{ marginRight: 15 }}>
							<Form.Check.Input
								type="checkbox"
								value={this.state.QandAData.secret}
								onChange={(e) => {
									this.setState({
										QandAData: { ...this.state.QandAData, secret: e.target.value }
									});
								}}
							/>
							<Form.Check.Label>비밀 Q&A</Form.Check.Label>
						</Form.Check>
						<Button
							className="FullBtn"
							onClick={() => {
								this.Send();
							}}
						>
							보내기
						</Button>
					</div>
				</div>
				<PopupMsg
					show={this.state.is_popup_msg}
					mode={this.state.popup_mode}
					onHide={this.state.popup_onHide}
					yesClick={this.state.yesClick}
					noClick={this.state.noClick}
					Message={this.state.Message}
					Message2={this.state.Message2}
					ok={this.state.ok}
				/>
			</div>
		);
	}
}

const FormView = [
	{
		type: 'textarea',
		title: '',
		dataField: 'question',
		isformcheck: true,
		placeholder: '100자 이내로 작성해주세요.',
		style: { height: '200px' }
	}
];

const AnswerForm = [
	{
		type: 'text',
		title: '',
		dataField: 'answer',
		isformcheck: true
	}
];
