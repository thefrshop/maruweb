import styles from './UserInfo.module.css';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';

const UserInfo = (props) => {
    const redirectHome = () => {
        Router.push('/');
    };

    const callLogout = () => {
        return new Promise((resolve, reject) => {
            axios
                .get('/web/logout')
                .then(() => {
                    props.logout();
                    resolve();
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    const logout = () => {
        if (Router.pathname !== '/') {
            callLogout().then(() => redirectHome());
        } else {
            callLogout();
        }
    };
    console.log(`props: ${JSON.stringify(props)}`);

    return (
        <div className={styles.Contain}>
            <div className={styles.ElementArea}>
                <p className={styles.Text}>{props.userinfo.name}님</p>
                <Link href={''}>
                    <a className={styles.Text}>마이페이지</a>
                </Link>
                <Link href={''}>
                    <a
                        className={styles.Text}
                        onClick={() => {
                            logout();
                        }}
                    >
                        로그아웃
                    </a>
                </Link>
            </div>
            {/* <p style={{ color: 'red' }}>이메일 인증 필요</p> */}
        </div>
    );
};

export default UserInfo;
