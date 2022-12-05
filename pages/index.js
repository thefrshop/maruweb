import React from "react";
import pstyles from "./page.module.css";

import Organization from "./organization/organization";
import Maru from "./intro/maru";
import PortfolioView from "./portfolio/portfolioView";
import Process from "./process/process";
import Category from "./process/category";
import NoticeTable from "./board/noticetable";
import FaqTable from "./board/faqtable";

import { Row, Col, Carousel, Button, Typography, Divider, Modal } from "antd";

import styles from "./index.module.css";
import Image from "next/image";
const { Title } = Typography;
const { error } = Modal;

// for Debug
import axios from "axios";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        const listData = [];
        for (let i = 0; i < 23; i++) {
            listData.push({
                href: "/sample",
                title: `마루미디어 ${i}`,
                avatar: "https://joeschmoe.io/api/v1/random",
                description: "마루미디어 콘셉트영상",
                content:
                    "마루미디어 콘셉트영상.마루미디어 콘셉트영상.마루미디어 콘셉트영상.마루미디어 콘셉트영상.마루미디어 콘셉트영상.마루미디어 콘셉트영상.마루미디어 콘셉트영상.",
            });
        }
        this.setState({ listData });
    };

    render() {
        var { listData } = this.state;
        console.log("user:", this.props.user);
        return (
            <div>
                <Carousel autoplay speed={5000}>
                    <div className={styles.CarouselItem}>
                        <div className={styles.CarouselImage}>
                            <Image src="/resource/images/banner1.jpg" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className={styles.CarouselContent}>
                            <div className={styles.CarouselContentTitle}>마루미디어 studio</div>
                            <div className={styles.CarouselContentDecs}>marimedea studio /marimedea studio /marimedea studio</div>
                            <Button className={styles.CarouselContentDecs}>studio 바로가기</Button>
                        </h3>
                    </div>
                    <div className={styles.CarouselItem}>
                        <div className={styles.CarouselImage}>
                            <Image src="/resource/images/banner2.jpg" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className={styles.CarouselContent}>
                            <div className={styles.CarouselContentTitle}>마루미디어 studio</div>
                            <div className={styles.CarouselContentDecs}>marimedea studio /marimedea studio /marimedea studio</div>
                            <Button className={styles.CarouselContentDecs}>studio 바로가기</Button>
                        </h3>
                    </div>
                    <div className={styles.CarouselItem}>
                        <div className={styles.CarouselImage}>
                            <Image src="/resource/images/banner3.jpg" layout="fill" objectFit="cover" />
                        </div>
                        <h3 className={styles.CarouselContent}>
                            <div className={styles.CarouselContentTitle}>마루미디어 studio</div>
                            <div className={styles.CarouselContentDecs}>marimedea studio /marimedea studio /marimedea studio</div>
                            <Button className={styles.CarouselContentDecs}>studio 바로가기</Button>
                        </h3>
                    </div>
                </Carousel>

                <div
                    level={5}
                    style={{
                        background: "#333",
                        textAlign: "center",
                        height: "50px",
                        color: "#fff",
                        lineHeight: "50px",
                    }}
                >
                    산꼭대기에서 세상의 온갖 아름다움을 보고 눈으로 새기듯
                    <Button
                        type="primary"
                        onClick={() => {
                            axios
                                .get("/web/check")
                                .then((res) => {
                                    console.table(res.data);
                                    console.log(1234, this.props.user);
                                })
                                .catch((err) => {
                                    if (err.response.status === 401) {
                                        error({
                                            title: "임시 비밀번호 사용 시 비밀번호 재설정이 필요합니다.",
                                            // content: '임시 비밀번호 사용 시 비밀번호 재설정이 필요합니다.',
                                        });
                                    }
                                });
                        }}
                    >
                        check
                    </Button>
                </div>

                <div className={pstyles.Section}>
                    <Row gutter={[16, 16]} style={{ width: "100%", textAlign: "center" }}>
                        <Maru {...this.props} />
                        <Col span={24} className={styles.TitleSection}>
                            <Title level={3}>방송 업계 출신 전문가와 함께하는 차별화된 영상제작</Title>
                        </Col>

                        <Organization {...this.props} maxnum={3} />

                        <Col span={24} className={styles.TitleSection}>
                            <Title level={3}>개인 미디어 영상에서부터 공공/기업이 원하는 전문적인 영상제작까지</Title>
                        </Col>
                        <Category {...this.props} />

                        <Col span={24} className={styles.TitleSection}>
                            <Title level={3}>체계적인 제작과정으로 </Title>
                        </Col>
                        <Process {...this.props} />

                        <Col span={24} className={styles.TitleSection}>
                            <Title level={3}>다양한 샘플영샹을 만나보세요 </Title>
                        </Col>
                        <section id="PortfolioView">
                            <PortfolioView {...this.props} data={listData} limit={2} />
                        </section>

                        <Col span={24} className={styles.TitleSection}>
                            <Title level={3}>
                                다양한 샘플영샹을 만나보세요<a href="/">ewrere</a>
                            </Title>
                        </Col>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <NoticeTable {...this.props} />
                            </Col>
                            <Col span={12}>
                                <FaqTable {...this.props} />
                            </Col>
                        </Row>
                    </Row>
                </div>
            </div>
        );
    }
}
