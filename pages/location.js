import React from 'react';

import { EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import { Collapse, Descriptions, Table, Divider } from 'antd';

import styles from './location.module.css';

import pstyles from './page.module.css';

export default class LocationPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			scriptLoaded: false
		};
		this.map = React.createRef(null);
	}

	componentDidMount() {
		this.ScriptLoad();
	}

	ScriptLoad = () => {
		const { scriptLoaded } = this.state;
		if (window.naver === undefined && !scriptLoaded) {
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=oy2t7l8gp2';
			script.onload = () => {
				this.map = new window.naver.maps.Marker({
					map: new window.naver.maps.Map('map', {
						center: { lat: 36.5673175, lng: 128.732508 },
						zoomControl: true,
						zoom: 18
					}),
					position: { lat: 36.5673175, lng: 128.732508 }
				});
			};
			head.appendChild(script);

			this.setState({
				scriptLoaded: true
			});
		} else {
			this.map = new window.naver.maps.Marker({
				map: new window.naver.maps.Map('map', {
					center: { lat: 36.5673175, lng: 128.732508 },
					zoomControl: true,
					zoom: 18
				}),
				position: { lat: 36.5673175, lng: 128.732508 }
			});

			this.setState({
				scriptLoaded: true
			});
		}
	};

	render() {
		return (
			<div className={styles.Contain}>
				<div className={pstyles.Title}> 찾아 오시는길</div>
				<Divider />
				<br />
				<div className={styles.Contents}>
					<div id="map" className={styles.MapContain} />
					<br />

					<div className={styles.Top}>
						<div className={styles.Content}>
							<EnvironmentOutlined className={styles.Icon} />
							<div className={styles.Left}>주소</div>
							<div className={styles.Right}>경상북도 안동시 태사2길 66. 2층</div>
						</div>
						<div className={styles.Content}>
							<PhoneOutlined className={styles.Icon} />
							<div className={styles.Left}>대표 전화</div>
							<div className={styles.Right}>1544-1544</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
