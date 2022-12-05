import React from 'react';
import { Spinner } from 'antd';
import styles from './LoadingPage.module.css';

const LoadingPage = ({ children, Data }) => {
	const [ state, setState ] = React.useState('loading');

	React.useEffect(
		() => {
			if (Data) setState('ok');
			else if (Data === false) setState('notpage');
		},
		[ Data ]
	);

	return (
		<div className="App">
			{state === 'loading' ? (
				<div
					className={[ 'Row', 'Center' ].join(' ')}
					style={{
						height: '50vh'
					}}
				>
					<Spinner className={styles.Spinner} animation="border" />
				</div>
			) : state === 'notpage' ? (
				<div className="NoDataContain">잘못된 페이지입니다.</div>
			) : state === 'ok' ? (
				children
			) : null}
		</div>
	);
};

export default LoadingPage;
