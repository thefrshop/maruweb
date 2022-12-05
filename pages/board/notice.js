import React from 'react';

import dynamic from 'next/dynamic';
import Router from 'next/router';

import axios from 'axios';
import moment from 'moment';
import { Collapse, Descriptions, Table, Divider } from 'antd';
import pstyles from '../page.module.css';
import NoticeTbale from './noticetable';

const { Panel } = Collapse;

class NoticePage extends React.Component {
	render() {
		return (
			<div className={pstyles.Section}>
				<div className={pstyles.Title}> 공지사항</div>
				<Divider />
				<br />
				<NoticeTbale />
			</div>
		);
	}
}

export default NoticePage;
