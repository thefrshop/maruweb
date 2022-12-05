import React from 'react';
import SignUpForm from '../../components/Modules/SignUpForm';
import styles from './signup.module.css';

class Form extends React.Component {
    render() {
        return (
            <div className={styles.Contain}>
                <SignUpForm />
            </div>
        );
    }
}

export default Form;
