import React from 'react';

import pstyles from '../page.module.css';
import PortfolioView from './portfolioView';

import { Image, Typography, List, Avatar, Space, Divider } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
const { Title } = Typography;
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount = () => {
		const listData = [];
		for (let i = 0; i < 23; i++) {
			listData.push({
				href: '/sample',
				title: `마루미디어 ${i}`,
				avatar: 'https://joeschmoe.io/api/v1/random',
				description: '마루미디어 샘플영상',
				content: '마루미디어 샘플영상.마루미디어 샘플영상.마루미디어 샘플영상.마루미디어 샘플영상.마루미디어 샘플영상.마루미디어 샘플영상.마루미디어 샘플영상.'
			});
		}
		this.setState({ listData });
	};

	render() {
		var { listData } = this.state;

		return (
			<div className={pstyles.Section}>
				<div className={pstyles.Title}> 샘플영상</div>

				<div className={pstyles.Decs}>
					<p>샘플영상 입니다.</p>
				</div>

				<Divider />
				<br />
				<PortfolioView data={listData} />
			</div>
		);
	}
}
