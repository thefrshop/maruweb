import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import axios from 'axios';
import { Button, Modal } from 'antd';
import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';

import { Menuset } from './menuset';
import styles from './SideMenu.module.css';

const { success, error } = Modal;

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        var dat = [];
        //console.log(this.props.isshowMenu);
        //console.log(this.props.showMenu);

        if (this.props.isshowMenu == false) {
            for (var i = 0; i < Menuset.length; i++) {
                dat.push(false);
            }
            this.props.SetMenucontrol(dat);
        } else {
            dat = this.props.showMenu;
        }
    }

    handleHover = (index) => {
        var dat = [];
        for (var i = 0; i < Menuset.length; i++) {
            dat.push(false);
        }
        dat[index] = !this.props.showMenu[index];
        //console.log(index, dat);

        this.props.SetMenucontrol(dat);
    };

    Menu = () => {
        return Menuset.map((item, index) => {
            if (item.logincheck) {
                if (this.props.authuser) {
                    return this.MenuRender(item, index);
                }
            } else if (item.level) {
                let check = false;
                if (this.props.userinfo.member_level) {
                    check = this.props.userinfo.member_level.split(',').find((m) => m === item.level);
                }
                if (check) {
                    return this.MenuRender(item, index);
                }
            } else return this.MenuRender(item, index);
        });
    };

    MenuRender = (item, index) => {
        return (
            <div key={index} className={styles.menuitem}>
                <div
                    className={styles.menuTitle}
                    style={{
                        color: this.props.showMenu[index] ? 'green' : '#fff',
                    }}
                    onClick={() => {
                        this.handleHover(index);
                    }}
                >
                    <div>{item.title}</div>
                    {this.props.showMenu[index] ? <StarOutlined /> : <StarFilled />}
                </div>
                <div
                    className={styles.SubMenuContain}
                    style={{
                        height: this.props.showMenu[index] ? item.menu.length * 54 + 20 : 0,
                    }}
                >
                    <div className={styles.submenu}>
                        {item.menu.map((item2, index2) => {
                            return (
                                <Link key={`${index}_${index2}`} href={item2.linkto.pathname} passHref>
                                    <div className={styles.submenuitem}>
                                        <div>{item2.tag}</div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };

    // onLogoutClick = async () => {
    //     await axios
    //         .get('/web/logout')
    //         .then((response) => {
    //             if (response.data.ok) {
    //                 this.props.Logout();
    //                 Router.push({ pathname: '/' });
    //             } else {
    //                 console.log(response);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });

    //     //event.preventDefault();
    // };

    onLogoutClick = async () => {
        await axios
            .get('/web/logout')
            .then(() => {
                this.props.logout();
                Router.push('/');
            })
            .catch((error) => {
                console.log(error);
            });

        //event.preventDefault();
    };

    requestSendMail = async (id) => {
        await axios
            .post('/web/sendAuthMail', id)
            .then(() => {
                success({
                    title: '인증 메일 전송완료',
                    content: '이메일 인증은 메일 발송 시점으로 부터 3분까지 유효합니다.',
                });
            })
            .catch((err) => {
                error({ title: err.response.data.message });
            });
    };

    render() {
        return (
            <div
                id={styles.Contain}
                style={{
                    opacity: this.props.SideShow ? 1 : 0,
                    visibility: this.props.SideShow ? 'visible' : 'hidden',
                }}
            >
                <div
                    style={{ width: '100vw', height: '100vh', zIndex: 5 }}
                    onClick={() => {
                        this.props.onHide();
                    }}
                />
                <div
                    className={styles.MenuPannel}
                    style={{
                        opacity: this.props.SideShow ? 1 : 0,
                        visibility: this.props.SideShow ? 'visible' : 'hidden',
                    }}
                >
                    <div>
                        {this.props.authuser && (
                            <div className={styles.Top} style={{ justifyContent: 'space-between' }}>
                                <div
                                    className={styles.Login}
                                    style={{ display: 'flex', alignItems: 'flex-end' }}
                                    onClick={() => Router.push('/signup')}
                                >
                                    <div className={styles.Title}>{this.props.userinfo.id}</div>님 안녕하세요{' '}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <Button className={['FullBtn', styles.point].join(' ')} onClick={() => Router.push('/User/MyPage')}>
                                        {this.props.userinfo.point_total} P
                                    </Button>
                                    <Button className={['FullBtn', styles.SignUp].join(' ')} onClick={() => this.onLogoutClick()}>
                                        로그아웃
                                    </Button>
                                    {!this.props.userinfo.email_auth && (
                                        <Button
                                            className={['FullBtn', styles.SignUp].join(' ')}
                                            style={{ backgroundColor: 'coral' }}
                                            onClick={() => this.requestSendMail({ id: this.props.userinfo.id })}
                                        >
                                            이메일 인증하기
                                        </Button>
                                    )}

                                    <div className={styles.point} />
                                </div>
                            </div>
                        )}
                        {this.Menu()}
                    </div>
                </div>
            </div>
        );
    }
}
export default SideMenu;
