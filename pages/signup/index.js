import React from 'react';
import SignUpForm from '../../components/Modules/SignUpForm';
import SignUpFormCopy from '../../components/Modules/SignUpFormCopy';
import Test from '../../components/Modules/Test';
import styles from './signup.module.css';
import TermsAndConditions from '../../components/Modules/TermsAndConditions';
import SendMail from '../../components/Modules/SendMail';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            userData: {},
        };
    }
    render() {
        const { value } = this.state;
        return (
            <div className={styles.Contain}>
                {/* <img src="resource/images/logo2.png" alt="" style={{ width: '200px' }} /> */}
                {/* <SignUpForm /> */}
                {value === 1 ? (
                    <TermsAndConditions onStep={(step) => this.setState({ value: step })} />
                ) : value === 2 ? (
                    <SignUpForm onStep={(step) => this.setState({ value: step })} setUserData={(userData) => this.setState({ userData: userData })} />
                ) : (
                    <SendMail {...this.props} userData={this.state.userData} />
                )}
            </div>
        );
    }
}

export default SignUp;
