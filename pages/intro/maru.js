import React from 'react';

import pstyles from '../page.module.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import { Row, Col, Button } from 'antd';

import styles from './intro.module.css';
export default class Maru extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Row justify="center" align="middle" className={styles.Maru}>
                <Col span={3} className={styles.blockquote}>
                    <FaQuoteLeft />
                </Col>
                <Col span={18}>
                    <Row gutter={[16, 16]}>
                        <Col span={24} className={styles.Title} />

                        <Col span={7} className={styles.word}>
                            Maru [마루] :
                        </Col>
                        <Col span={16} className={styles.word_decs}>
                            명사 등성이를 이루는 지붕이나 산 따위의 꼭대기 <br />
                            명사 ‘하늘’을 뜻하는 순수 우리말
                        </Col>

                        <Col span={7} className={styles.word}>
                            Media [미디어] :
                        </Col>
                        <Col span={16} className={styles.word_decs}>
                            명사 어떤 작용을 한쪽에서 다른 쪽으로 전달하는 역할을 하는 것
                        </Col>
                    </Row>
                </Col>
                <Col span={3} className={styles.blockquote}>
                    <FaQuoteRight />
                </Col>
            </Row>
        );
    }
}
