import React from 'react';
import LoginForm from '../components/Modules/LoginForm';
import { Button } from 'antd';
import axios from 'axios';

import styles from './login.module.css';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
    }

    componentDidMount() {}

    render() {
        return (
            <div className={styles.Contain}>
                <img className={styles.Logo} src="resource/images/maru_logo.png" alt="logo" />
                <div className={styles.FromWrapper}>
                    <LoginForm {...this.props} />
                </div>
            </div>
        );
    }
}
