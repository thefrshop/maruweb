import React from 'react';
import { CookiesProvider } from 'react-cookie';
import Head from 'next/head';
import Router from 'next/router';
import Script from 'next/script';
import NProgress from 'nprogress';
import wrapper from '../redux/configureStore';

import '../styles/globals.css';
import 'video-react/dist/video-react.css';
//import 'tfsm-formset/dist/index.css';
//import 'react-image-gallery/styles/css/image-gallery.css';
import '../styles/App.css';
import 'antd/dist/reset.css';

import withNavi from '../components/layout/withNavi';
import withData from '../components/layout/withData';
import withContents from '../components/layout/withContents';

// 라우터 이동 시 로딩 설정
Router.onRouteChangeStart = (url) => {
	NProgress.start();
};

// 라우터 이동 완료 시 로딩 설정
Router.onRouteChangeComplete = () => NProgress.done();

// 라우터 에러 발생 시 로딩 설정
Router.onRouteChangeError = () => NProgress.done();

function App({ Component, pageProps }) {
	const WithContents = withContents(Component);
	const WithNaviComponent = withNavi(WithContents);
	const WithDataComponent = withData(WithNaviComponent);

	return (
		<div>
			<Head>
				<title>마루 미디어</title>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				<link rel="apple-touch-icon" href="favicon-180.png" />
				<link rel="canonical" href="http://marumedia.co.kr" />
				<meta property="og:title" content="마루 미디어" />
				<meta property="og:description" content="마루 미디어" />
				<meta property="og:image" content="kakaoicon1.png" />
				<meta property="og:image:width" content="800" />
				<meta property="og:image:height" content="400" />
				<meta property="og:url" content="http://marumedia.co.kr" />
				<meta property="og:site_name" content="마루 미디어" />
				<meta property="og:type" content="website" />
				<meta name="description" content="마루 미디어" />
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
					integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
					crossOrigin="anonymous"
				/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
			</Head>

			<WithDataComponent {...pageProps} />
		</div>
	);
}

export default wrapper.withRedux(App);
// 아이디 비밀번호 찾기 구현 방법
// 체크 박스 로그인 유지
// form을 사용하는 이유
