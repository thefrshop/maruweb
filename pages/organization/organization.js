import React from 'react';
import styles from './organization.module.css';

import { Image, Space, Typography, Divider } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
const { Title } = Typography;

export default class Organization extends React.Component {
	static defaultProps = {
		maxnum: 100
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	member = () => {
		var { maxnum } = this.props;
		var table = [];

		data.forEach((item, index) => {
			if (index < maxnum)
				table.push(
					<div className={styles.MemberItem} key={index}>
						<div className={styles.MemberImagePane}>
							<Image
								className={styles.MemberImage}
								width={100}
								height={100}
								preview={false}
								src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
							/>
						</div>
						<div className={styles.MemberName}>{item.name}</div>

						<div className={styles.MemberPosition}>{item.position}</div>
						<div className={styles.MemberPosition}>{item.history}</div>

						<Space className={styles.MemberSNS}>
							<div className={styles.MemberFacebook}>
								<FacebookOutlined className={styles.SNSIcon} />
								{item.facebook}
							</div>
							<div className={styles.MemberInstar}>
								<InstagramOutlined className={styles.SNSIcon} />
								{item.instar}
							</div>
							<div className={styles.MemberInstar}>
								<TwitterOutlined className={styles.SNSIcon} />
								{item.twitter}
							</div>
						</Space>
					</div>
				);
		});

		return <div className={styles.MemberSection}>{table}</div>;
	};

	render() {
		return this.member();
	}
}

const data = [
	{
		name: 'KimGuHan Master',
		position: 'CEO / 제작경력 20년',
		history: 'MBC ',
		image: '',
		facebook: '',
		instar: ''
	},
	{
		name: 'Lee Pro.',
		position: '촬영 / 촬영경력 15년',
		history: 'KBS',
		image: '',
		facebook: '',
		instar: ''
	},
	{
		name: 'Park Pro.',
		position: '편집 / 편집경력 10년',
		history: 'SBS',
		image: '',
		facebook: '',
		instar: ''
	},
	{
		name: '홍길동',
		position: 'CG',
		history: 'CG',

		image: '',
		facebook: '',
		instar: ''
	},
	{
		name: '홍길동',
		position: '홍보',
		history: '홍보',
		image: '',
		facebook: '',
		instar: ''
	},
	{
		name: '홍길동',
		position: '상담',
		history: '상담',
		facebook: '',
		instar: ''
	}
];
