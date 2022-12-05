import React from 'react';

import { Image, Divider } from 'antd';
import pstyles from '../page.module.css';

export default class Process extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{ width: '100%' }}>
				<Image width={1000} src={'/resource/images/process2.png'} alt="" preview={false} />
			</div>
		);
	}
}
