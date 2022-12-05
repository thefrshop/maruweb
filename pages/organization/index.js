import React from 'react';
import pstyles from '../page.module.css';

import { Image, Space, Typography, Divider } from 'antd';
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import Organization from './organization';

const { Title } = Typography;

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={pstyles.Section}>
				<div className={pstyles.Title}> 마루미디어 조직</div>
				<Divider />
				<br />
				<div className={pstyles.Decs}>
					<p>20년 동안 방송가에 살아온 사람들.</p>
					<p>그동안 다큐, 예능, 시사, 드라마 등을 작업하면서 얻은 노하우를 바탕으로</p>
					<p>간단한 촬영에서부터 다양한 영상제작은 물론이고,</p>
					<p>사람들이 원하는 홍보영상까지 만들어드리고 있습니다.</p>
				</div>

				<Organization {...this.props} />
			</div>
		);
	}
}
