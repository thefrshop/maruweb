import React from 'react';

import pstyles from '../page.module.css';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<div className={pstyles.Title}> 인사말</div>
				<div className={pstyles.Decs}>
					<p>미디어. 우리는 하루에도 얼마나 많은 미디어를 접하고 있을까.</p>

					<p>
						과거와는 다르게 현대를 살아가고 있는 우리들은 어린아이에서부터 어르신들까지 <br />
						영상을 보지 않고는 살아갈 수 없는 환경에서 놓여있습니다.
					</p>
					<p>매일 새로운 영상 콘텐츠에 열광하고, 또 색다른 미디어 매체에 사람들은 관심이 집중되어 있는데요.</p>
					<p>그런데 정작 우리들은 이러한 미디어를 이용하고, 영상을 제작하는데 어려움을 토로합니다.</p>
					<p>
						사회는 점차 다양한 콘텐츠와 미디어가 생활의 중심을 이루어가고 있지만, <br />그것을 접하기는 쉬워도 우리 각자는 이런 콘텐츠와 미디어를 직접 제작하기란 그렇게 쉬운
						일이 아닙니다.
					</p>
					<p>
						{`<마루미디어>`}는 이런 어려움을 해소하고, <br />미디어 시대를 살아가는 우리들에게 조금 더 자신을 잘 표현할 수 있게 서비스를 제공할 예정입니다.
					</p>
					<br />
					<p>더 간편하게! 더 세련되게! 더 자유롭게!</p>
					<br />
					<p>{`<마루미디어>`}는 최고의 영상 제작과 최선의 홍보를 위해 늘 노력할 것입니다.</p>
					<br />
					<p>마루미디어 대표이사 김구한</p>

					<p>
						산꼭대기에서 세상의 온갖 아름다움을 보고 눈으로 새기듯 가장 이상적인 영상을 제작하여 소비자가 마루에 올라 감상하는 듯한 기분이 들 수 있게 최선을 다하겠습니다. 각종
						홍보영상 촬영 등 미디어 제작을 표준화를 통해 소비자가 쉽고 친숙하게 제작 의뢰할 수 있도록 하는 사이트입니다. 마루미디어에서는 사진작가, 영상감독, 카피라이터,
						웹디자이너, 그래픽디자이너, 스타일리스트 분야별 전문가와 협업하여 #영상제작 #SNS컨텐츠 # 관공서 홍보영상 등 콘텐츠를 전문으로 제작하고 있습니다.
					</p>
				</div>
			</div>
		);
	}
}