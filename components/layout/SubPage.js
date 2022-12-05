import React from 'react';
import Router from 'next/router';

import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

import { Menuset } from './menuset';

import styled from '../../styles/module/SubPage/subpage_dynamic.module.css';
import styles from '../../styles/module/SubPage/subpage_static.module.css';

const SubPage = (props) => {
	const { onDevice, SubPageCheck = false } = props;
	const [ Select, setSelect ] = React.useState({ id: '', name: '' });
	const [ SubSelect, setSubSelect ] = React.useState({ id: '', name: '' });
	const [ SubPid, setSubPid ] = React.useState('');

	React.useEffect(
		() => {
			if (props.router.pathname.split('/')[1] && SubPageCheck) {
				let name = Menuset.find((i) => i.id === props.router.pathname.split('/')[1]);
				if (name !== undefined) {
					setSelect({ id: name.id, name: name.title });
					if (props.router.pathname.split('/')[2]) {
						if (props.router.pathname.split('/')[3]) {
							let check = `/${props.router.pathname.split('/')[1]}/${props.router.pathname.split(
								'/'
							)[2]}`;

							let name2 = name.menu.find((i) => i.linkto.pathname === check);

							if (name2) setSubSelect({ id: name2.linkto.pathname, name: name2.tag });
						} else {
							let name2 = name.menu.find((i) => i.linkto.pathname === props.router.pathname);
							if (name2) setSubSelect({ id: name2.linkto.pathname, name: name2.tag });
						}
					} else {
						//console.log(name.id);
						if (name.id === 'Info') setSubSelect({ id: '/Info', name: '시설소개 및  인사말' });
						else if (name.id === 'UseApply') setSubSelect({ id: '/UseApply', name: '일정 현황' });
						else if (name.id === 'SupportProject') setSubSelect({ id: '/SupportProject', name: '지원사업' });
						else if (name.id === 'Expert') setSubSelect({ id: '/Expert', name: '강사 프로필' });
						else if (name.id === 'Startups') setSubSelect({ id: '/Startups', name: '창업자 정보관리' });
					}
				}
			}
			if (props.router.query.pid) setSubPid(props.router.query.pid);
		},
		[ props.router.pathname, SubPageCheck ]
	);

	const SubTitleList = () => {
		let data = Menuset.find((i) => i.id === Select.id);

		return (
			data && (
				<div className={[ 'Column', styles.SubNaviContain ].join(' ')}>
					<div className={styles.Title}>{data.title}</div>
					<div className={[ 'Column', styles.SubNaviContain ].join(' ')}>
						{data.menu.map((item, index) => {
							return (
								<div
									key={index}
									className={styles.SubTitle}
									style={{
										backgroundColor: item.linkto.pathname === SubSelect.id ? '#2d478b' : '#fff',
										color: item.linkto.pathname === SubSelect.id ? '#fff' : '#000'
									}}
									onClick={() => {
										Router.push(item.linkto.pathname);
									}}
								>
									{item.tag}
								</div>
							);
						})}
					</div>
				</div>
			)
		);
	};

	if (!SubPageCheck) return props.children;
	else {
		return (
			<div id={styled['Contain_' + onDevice]}>
				<div className={styles.Contents}>
					{onDevice === 'PC' && <div className="Column">{SubTitleList()}</div>}
					<div style={{ width: '100vw', maxWidth: 1000, flex: 1, marginLeft: 30, marginRight: 30 }}>
						<div className={[ 'TwoButtonContain', styles.Top ].join(' ')}>
							<div className={styles.Left}>{SubSelect.name === '' ? Select.name : SubSelect.name}</div>
							{onDevice !== 'Mobile' && (
								<div className={[ 'Row', 'Center', styles.Right ].join(' ')}>
									<StarOutlined />
									<StarFilled className={styles.Icon} />
									<div>{Select.name}</div>
									{SubSelect.name !== '' && (
										<div className={[ 'Row', 'Center' ].join(' ')}>
											<StarTwoTone className={styles.Icon} />
											<div>{SubSelect.name}</div>
										</div>
									)}
									{SubPid !== '' && (
										<div className={[ 'Row', 'Center' ].join(' ')}>
											<StarTwoTone className={styles.Icon} />
											<div>{SubPid}</div>
										</div>
									)}
								</div>
							)}
						</div>

						{props.children}
					</div>
				</div>
			</div>
		);
	}
};

export default SubPage;
