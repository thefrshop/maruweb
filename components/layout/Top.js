import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "antd";
import { CSSTransition } from "react-transition-group";

import { Menuset } from "./menuset";

import styled from "../../styles/module/NaviTop/navitop_dynamic.module.css";
import styles from "../../styles/module/NaviTop/navitop_static.module.css";
import { Link as SLink, animateScroll as scroll } from "react-scroll";

class TopNavi extends React.Component {
    constructor(props) {
        super(props);
        this.ham = React.createRef();

        var showMenu = [];
        //console.log(this.props.menuset);
        for (var i = 0; i < Menuset.length; i++) {
            showMenu.push(false);
        }
        this.state = {
            showMenu: showMenu,
        };
    }

    handleHover = (index) => {
        var showMenu = this.state.showMenu;
        showMenu[index] = true;
        //console.log(index, showMenu);

        this.setState({ showMenu: showMenu });
    };

    handleLeave = (index) => {
        var showMenu = this.state.showMenu;
        showMenu[index] = false;
        //console.log(index, showMenu);

        this.setState({ showMenu: showMenu });
    };

    MenuRender = (item, index) => {
        const { showMenu } = this.state;

        return (
            <div key={index} className={styles.menuitem} onMouseLeave={() => this.handleLeave(index)}>
                <div className={styled.submenuTitle} onMouseEnter={() => this.handleHover(index)}>
                    {item.title}
                </div>
                <div
                    className={styles.submenu_container}
                    style={{
                        height: showMenu[index] ? 250 : 0,
                        opacity: showMenu[index] ? 1 : 0,
                        visibility: showMenu[index] ? "visible" : "hidden",
                    }}
                >
                    <CSSTransition classNames={styles.slide} in={showMenu[index]} timeout={300}>
                        <div className={styles.submenu} onClick={() => this.handleLeave(index)}>
                            {item.menu.map((item2, index2) => {
                                if (item2.auth_email) {
                                    if (this.props.authuser) {
                                        if (this.props.userinfo.auth_email) {
                                            return (
                                                <div key={index + "_" + index2} className={styles.submenuitem}>
                                                    {item2.SLink ? (
                                                        <SLink
                                                            activeClass="active"
                                                            to={item2.SLink}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={-70}
                                                            duration={500}
                                                            key={index + "_" + index2}
                                                        >
                                                            <Button className={styled.btn_menu} variant="">
                                                                {item2.tag}
                                                            </Button>
                                                        </SLink>
                                                    ) : (
                                                        <Link href={item2.linkto.pathname} key={index + "_" + index2}>
                                                            <Button className={styled.btn_menu} variant="">
                                                                {item2.tag}
                                                            </Button>
                                                        </Link>
                                                    )}
                                                </div>
                                            );
                                        }
                                    }
                                } else {
                                    return (
                                        <div key={index + "_" + index2} className={styles.submenuitem}>
                                            {item2.SLink ? (
                                                <SLink
                                                    activeClass="active"
                                                    to={item2.SLink}
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-70}
                                                    duration={500}
                                                    key={index + "_" + index2}
                                                >
                                                    <Button className={styled.btn_menu} variant="">
                                                        {item2.tag}
                                                    </Button>
                                                </SLink>
                                            ) : (
                                                <Link href={item2.linkto.pathname} key={index + "_" + index2}>
                                                    <Button className={styled.btn_menu} variant="">
                                                        {item2.tag}
                                                    </Button>
                                                </Link>
                                            )}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </CSSTransition>
                </div>
            </div>
        );
    };

    Menu = () => {
        return Menuset.map((item, index) => {
            if (item.logincheck) {
                if (this.props.authuser) {
                    return this.MenuRender(item, index);
                }
            } else if (item.level) {
                if (this.props.authuser) {
                    if (this.props.userinfo.role === item.level) {
                        return this.MenuRender(item, index);
                    }
                }
            } else return this.MenuRender(item, index);
        });
    };

    render() {
        const { onDevice } = this.props;
        return (
            <div id={styled["Contain_" + onDevice]}>
                <nav className={styles.navbar}>
                    <div className={styles.navbar_inner}>{onDevice !== "Mobile" ? this.Menu() : null}</div>
                </nav>
            </div>
        );
    }
}

export default TopNavi;
