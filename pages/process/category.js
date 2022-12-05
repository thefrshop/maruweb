import React from 'react';

import { Image, Divider } from 'antd';

export default class Category extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{ width: '100%' }}>
				<Image width={1000} src={'/resource/images/process1.png'} alt="" preview={false} />
			</div>
		);
	}
}
