import { Divider, Input, Button, Modal } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const { confirm } = Modal;

const SendMail = (props) => {
    const router = useRouter();

    const resendMail = () => {
        axios
            .post('/web/resendAuthEmail/', props.userData)
            .then(() => {
                alert('재전송 되었습니다.');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <h2>
                <b>인증 링크를 메일로 발송했습니다.</b>
            </h2>
            <h2 style={{ color: '#1890FF' }}>{props.userData.email}</h2>
            <p>이메일로 전송받은 인증 링크를 확인해주세요.</p>

            <p>
                인증번호는 이메일 발송 시점으로부터 <span style={{ color: 'red' }}>3분</span> 동안 유효합니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                    <a style={{ marginBottom: '10px' }} onClick={() => router.push('/login')}>
                        로그인
                    </a>

                    <Divider type="vertical" />
                    <a style={{ marginBottom: '10px' }} onClick={resendMail}>
                        이메일 재전송
                    </a>
                </div>
            </div>
        </>
    );
};

export default SendMail;
