import React from 'react';

import dynamic from 'next/dynamic';
import Router from 'next/router';

import axios from 'axios';
import moment from 'moment';
import { Collapse, Descriptions, Table, Divider } from 'antd';
import pstyles from '../page.module.css';
import FaqTable from './faqtable';

const { Panel } = Collapse;

class Faq extends React.Component {
	render() {
		return (
			<div className={pstyles.Section}>
				<div className={pstyles.Title}> 자주묻는 질문</div>
				<Divider />
				<br />
				<FaqTable />
			</div>
		);
	}
}

export default Faq;
