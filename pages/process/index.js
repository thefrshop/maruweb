import React from 'react';

import { Image, Divider } from 'antd';
import pstyles from '../page.module.css';
import Category from './category';
import Process from './process';

export default class OurProcess extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className={pstyles.Section}>
				<div className={pstyles.Title}>제작 과정</div>
				<Divider />
				<br />
				<Category />
				<br />
				<Divider />

				<br />

				<br />
				<Process />
			</div>
		);
	}
}
