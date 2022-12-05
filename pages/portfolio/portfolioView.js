import React from 'react';

import styles from './portfolioView.module.css';
import pstyles from '../page.module.css';

import { Image, Typography, List, Avatar, Space, Divider } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
const { Title } = Typography;
export default class PortfolioView extends React.Component {
	static defaultProps = {
		data: [],
		limit: 0
	};

	constructor(props) {
		super(props);
		this.state = {
			viewdata: [],
			pagination: {
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 5
			}
		};
	}

	componentDidUpdate = (prevProps, prevState, snapshot) => {
		if (prevProps.data !== this.props.data || prevProps.limit !== this.props.limit) {
			var { limit, data } = this.props;

			if (limit !== 0) {
				var viewdata = data.slice(0, limit);
				console.log(viewdata);
				this.setState({ viewdata, pagination: false });
			} else this.setState({ viewdata: data });
		}
	};

	movie = () => {
		const IconText = ({ icon, text }) => (
			<Space>
				{React.createElement(icon)}
				{text}
			</Space>
		);

		return (
			<List
				itemLayout="vertical"
				size="large"
				pagination={this.state.pagination}
				dataSource={this.state.viewdata}
				footer={
					<div>
						<b>maru media</b> copy
					</div>
				}
				renderItem={(item) => (
					<List.Item
						key={item.title}
						actions={[
							<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
							<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
							<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
						]}
						extra={<img width={272} alt="logo" src="/resource/images/studio2.jpg" />}
					>
						<List.Item.Meta
							avatar={<Avatar src={item.avatar} />}
							title={<a href={item.href}>{item.title}</a>}
							description={item.description}
						/>
						{item.content}
					</List.Item>
				)}
			/>
		);
	};

	render() {
		return this.movie();
	}
}
