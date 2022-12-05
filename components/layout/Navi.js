import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

import Image from "next/image";

import { Motion, spring, presets } from "react-motion";
import Top from "./Top";

import styles from "./Navi.module.css";
import UserInfo from "../Modules/UserInfo";

const MainNavi = (props) => {
    const { SideShow, onHide, SubPageCheck, onDevice, forceFix = false } = props;

    const [scrollY, setScrollY] = useState(0);
    const [TopOn, setTopOn] = useState(false);
    const [NavStyle, setNavStyle] = useState({
        position: "absolute",
        color: "#fff",
    });
    const [Space, setSpace] = useState({ height: "0" });

    useEffect(() => {
        //console.log(scrollY);
        var navFixStyle = {};
        var space = {};

        if (scrollY > 50 || forceFix) {
            navFixStyle = {
                color: "#000",
                position: "fixed",
                top: "0px",
                background: "#fff",
                borderBottom: "1px solid #cdcdcd",
            };
            space = { height: "80px" };
            setNavStyle(navFixStyle);
            setTopOn(true);
            setSpace(space);
        } else {
            navFixStyle = {
                position: "absolute",
                color: "#fff",
            };
            space = { height: "0" };
            setNavStyle(navFixStyle);
            setTopOn(false);
            setSpace(space);
        }

        const handleOnscroll = (e) => {
            if (window.scrollY > 0) setScrollY(window.scrollY);
            else setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleOnscroll);

        return () => {
            window.removeEventListener("scroll", handleOnscroll);
        };
    }, [scrollY, forceFix]);

    return (
        <div>
            <nav id={styles.Contain} style={NavStyle}>
                <div className={styles.Contents}>
                    <Link href={"/"} passHref>
                        <div className={styles.Title}>
                            {TopOn ? (
                                <Image loading="eager" className={styles.Image} width={40} height={40} src={"/malulogo.png"} alt="" />
                            ) : (
                                <Image loading="eager" className={styles.Image} width={40} height={40} src={"/malulogo.png"} alt="" />
                            )}
                            <div className={styles.Txt}>마루미디어</div>
                        </div>
                    </Link>
                    {/* TEST ===========================================================================*/}
                    {/* <button
                        onClick={() => {
                            console.log(`주소:${Router.pathname}, 쿼리:${JSON.stringify(Router.query)}`);
                        }}
                    >
                        주소확인
                    </button> */}
                    {/* TEST ===========================================================================*/}
                    <div>
                        <Top {...props} onDevice={onDevice} />
                    </div>

                    <div className={["Row", "Center"].join(" ")}>
                        {/* // props.authuser를 활용해서 로그인 유무에 따라서 렌더링 */}
                        {/* ===================================================================================== */}
                        {/* {!props.user && (
                            <div className={styles.Top}>
                                <div className={styles.Login} onClick={() => Router.push('/login')}>
                                    Login
                                </div>
                                <div style={{ marginLeft: 15, marginRight: 15 }}>|</div>
                                <div className={styles.SignUp} onClick={() => Router.push('/signup')}>
                                    Join
                                </div>
                            </div>
                        )} */}
                        {/* ===================================================================================== */}
                        {/* <UserInfo className={styles.UserInfo} userName={'정재훈'} /> */}
                        {/* {props.user ? ( */}

                        {props.authuser ? (
                            <UserInfo className={styles.UserInfo} userinfo={props.userinfo} setUser={props.SetAuthUser} logout={props.SetLogout} />
                        ) : (
                            <div className={styles.Top}>
                                <div className={styles.Login} onClick={() => Router.push("/login")}>
                                    Login
                                </div>
                                <div style={{ marginLeft: 15, marginRight: 15 }}>|</div>

                                <div className={styles.SignUp} onClick={() => Router.push("/signup")}>
                                    Join
                                </div>
                            </div>
                        )}
                        <div
                            className={styles.HamburgerButton}
                            style={{
                                backgroundColor: SubPageCheck ? "#2d478b" : "#fff",
                            }}
                            onClick={onHide}
                        >
                            <svg
                                className={styles.Hamburger}
                                color={SubPageCheck ? "#fff" : "#2d478b"}
                                viewBox="-0 -0 100 100"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <Motion
                                    style={{
                                        x: spring(SideShow ? 1 : 0, presets.wobbly),
                                        y: spring(SideShow ? 0 : 1, presets.wobbly),
                                    }}
                                >
                                    {({ x, y }) => (
                                        <g
                                            id="navicon"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line
                                                transform={`translate(${x * 12}, ${x * -7}) rotate(${x * 45}, 7, 26)`}
                                                x1="7"
                                                y1="26"
                                                x2="89"
                                                y2="26"
                                            />
                                            <line
                                                transform={`translate(${x * 12}, ${x * 7}) rotate(${x * -45}, 7, 70)`}
                                                x1="7"
                                                y1="70"
                                                x2="89"
                                                y2="70"
                                            />
                                            <line transform={`translate(${x * -96})`} opacity={y} x1="7" y1="48" x2="89" y2="48" />
                                        </g>
                                    )}
                                </Motion>
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={Space} />
        </div>
    );
};

export default MainNavi;
