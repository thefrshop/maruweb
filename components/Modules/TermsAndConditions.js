import React, { useCallback, useState } from 'react';
import styles from './TermsAndConditions.module.css';
import { Checkbox, Input, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
const { TextArea } = Input;

const data1 =
    '네이버는 수시로 본 약관, 계정 및 게시물 운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는개정할 수 있습니다만, 관련 법령을 위배하지 않는 범위 내에서 개정할 것이며, 사전에 그 개정 이유와 적용 일자를 서비스 내에 알리도록 하겠습니다. 또한 여러분에게 불리할 수 있는 중대한 내용의 약관 변경의 경우에는 최소 30일 이전에 해당 서비스 내 공지하고 별도의 전자적 수단(전자메일, 서비스 내 알림 등)을 통해 개별적으로 알릴 것입니다.네이버는 변경된 약관을 게시한 날로부터 효력이 발생되는 날까지 약관 변경에 대한 여러분의 의견을 기다립니다. 위 기간이 지나도록 여러분의 의견이 네이버에 접수되지 않으면, 여러분이 변경된 약관에 따라 서비스를 이용하는 데에 동의하는 것으로 간주됩니다. 네이버로서는 매우 안타까운 일이지만, 여러분이 변경된 약관에 동의하지 않는 경우 변경된 약관의 적용을 받는 해당 서비스의 제공이 더 이상 불가능하게 될 수 있습니다.네이버 서비스에는 기본적으로 본 약관이 적용됩니다만, 부득이 각 개별 서비스의 고유한 특성을 반영하기 위해 본 약관 외 별도의 약관, 운영정책이 추가로 적용될 때가 있습니다. 따라서 별도의 약관, 운영정책에서 그 개별 서비스 제공에 관하여 본 약관, 계정 및 게시물 운영정책과 다르게 정한 경우에는 별도의 약관, 운영정책이 우선하여 적용됩니다. 이러한 내용은 각각의 개별 서비스 초기 화면에서 확인해 주시기 바랍니다.본 약관은 한국어를 정본으로 합니다. 본 약관 또는 네이버 서비스와 관련된 여러분과 네이버와의 관계에는 대한민국의 법령이 적용됩니다. 그리고 본 약관 또는 네이버 서비스와 관련하여 여러분과 네이버 사이에 분쟁이 발생할 경우, 그 분쟁의 처리는 대한민국 "민사소송법에서 정한 절차를 따릅니다.공지 일자: 2018년 3월 30일적용 일자: 2018년 5월 1일네이버 서비스와 관련하여 궁금하신 사항이 있으시면 고객센터(대표번호: 1588 – 3820/ 평일 09:00~18:00)로 문의 주시기 바랍니다.운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않운영정책을 개정할 수 있습니다만, 관련 법령을 위배하지 않';

const TermsAndConditions = (props) => {
    const [checked, setChecked] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const router = useRouter();

    return (
        <div className={styles.Contain}>
            <img src="resource/images/logo2.png" alt="" style={{ alignSelf: 'center', width: '200px', marginBottom: '20px' }} />
            <h1 style={{ alignSelf: 'center' }}>
                마루미디어
                <br /> 서비스 약관에 동의해주세요.
            </h1>
            <TextArea defaultValue={data1} readOnly={true} autoSize={{ minRows: 3, maxRows: 13 }} style={{ height: '500px' }} />
            <Checkbox
                checked={checked}
                onClick={() => {
                    setChecked(!checked);
                }}
                className={styles.CheckBoxPosition}
            >
                <h6 className={styles.TextMargin}>마루미디어 이용약관 동의(필수)</h6>
            </Checkbox>
            {!checked && isClicked && <p className={styles.WarningText}>이용약관에 대한 안내를 동의해주세요.</p>}
            <div className={styles.ButtonArea}>
                <Button
                    type="primary"
                    onClick={() => router.push('/')}
                    style={{ width: '205px', height: '60px', marginTop: '30px', marginRight: '30px' }}
                >
                    취소
                </Button>
                <Button
                    type="primary"
                    style={{ width: '205px', height: '60px', marginTop: '30px' }}
                    onClick={() => {
                        setIsClicked(true);
                        if (checked) {
                            // 회원가입 페이지로 리다이렉트
                            props.onStep(2);
                        } else {
                            return;
                        }
                    }}
                >
                    확인
                </Button>
            </div>
        </div>
    );
};

export default TermsAndConditions;
