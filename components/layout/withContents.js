import React from "react";
import { withRouter } from "next/router";

import { Layout, Menu, Row, Col, Space } from "antd";
import styles from "./withContents.module.css";
import { FacebookOutlined, InstagramOutlined, TwitterOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const withContents = (Component) => {
    class WithContents extends React.Component {
        _isMounted = false;

        constructor(props) {
            super(props);

            this.state = {};
        }

        componentDidMount() {
            this._isMounted = true;
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            const { scrollY, onDevice, SideShow, PageStation } = this.state;

            return (
                <Layout className={styles.Layout}>
                    <Content className={styles.Content}>
                        <Component
                            {...this.props}
                            ReadMyinfo={this.ReadMyinfo}
                            PageStation={PageStation}
                            onDevice={onDevice}
                            onPopup={(popup) => {
                                this.setState({
                                    popup: { ...this.popup, ...popup },
                                });
                            }}
                        />
                    </Content>
                    <Footer className={styles.Footer}>
                        <Row className={styles.Footer_Row}>
                            <Col span={6} />
                            <Col span={12}>
                                <span>업체명 : 마루미디어 | 사업자등록번호 : 000-00-00000 | 대표이사 : 김구한</span>
                                <br />
                                <span>주소 : 경상북도 안동시 태사2길 66. 2층 | 대표전화 : 1544-1544</span>
                                <br />
                                <span>COPYRIGHTⓒ 2022 MARUMEDIA INC. ALL RIGHTS RESERVED</span>
                            </Col>
                            <Col span={6} style={{ fontSize: "30px" }}>
                                <Space>
                                    <FacebookOutlined />
                                    <InstagramOutlined />
                                    <TwitterOutlined />
                                </Space>
                            </Col>
                        </Row>
                    </Footer>
                </Layout>
            );
        }
    }

    return withRouter(WithContents);
};

export default withContents;
