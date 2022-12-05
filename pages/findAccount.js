import React from 'react';

import { Button } from 'antd';
import axios from 'axios';
import styles from './findAccount.module.css';
import FindAccountForm from '../components/Modules/FindAccountForm';
import IdList from '../components/Modules/IdList';

export default class findAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userData: [], id: [], step: 1 };
    }

    componentDidMount() {}

    // setUserData(value) {
    //     this.state.userData.setState(value);
    // }

    render() {
        return (
            <div className={styles.Contain}>
                <img className={styles.Logo} src="resource/images/maru_logo.png" alt="logo" />
                <h2>아이디 찾기</h2>

                <div className={styles.FromWrapper}>
                    {this.state.step === 1 ? (
                        <FindAccountForm
                            userData={this.state.userData}
                            setUserData={(value) => {
                                this.setState({ userData: value });
                            }}
                            setStep={(value) => {
                                this.setState({ step: value });
                            }}
                        />
                    ) : this.state.step === 2 ? (
                        <IdList
                            userData={this.state.userData}
                            setStep={(value) => {
                                this.setState({ step: value });
                            }}
                        />
                    ) : (
                        false
                    )}
                </div>
            </div>
        );
    }
}
