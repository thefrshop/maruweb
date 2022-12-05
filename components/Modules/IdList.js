import styles from './IdList.module.css';
import { Button, Radio, Space } from 'antd';
import Router from 'next/router';

import React from 'react';

const IdList = (props) => {
    const [value, setValue] = React.useState(0);

    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    };

    const generateHtmlTag = props.userData.ids.map((userId) => {
        return (
            <Radio key={userId.account_id} value={userId.id}>
                <p>{userId.blindId}</p>
            </Radio>
        );
    });

    return (
        <div className={styles.Contain}>
            <p>
                {props.userData.name}/{props.userData.email} 으로 찾은 아이디입니다. 개인정보 보호를 위해 아이디 일부는 *로 표기됩니다.
                {/* <br /> 찾고 싶은 아이디를 선택하면 이메일로 아이디가 전송됩니다. */}
            </p>

            <div className={styles.List}>
                <Radio.Group onChange={onChange} value={value}>
                    <Space direction="vertical">{generateHtmlTag}</Space>
                </Radio.Group>
            </div>

            <Button type="primary" onClick={() => props.setStep(1)}>
                이전으로
            </Button>
            <Button type="primary" onClick={() => Router.push('/login')}>
                로그인
            </Button>
        </div>
    );
};

export default IdList;
