import React from "react";
import { withRouter } from "next/router";

import Navi from "./Navi";
import SideMenu from "./SideMenu";

const withNavi = (Component) => {
    class WithNavi extends React.Component {
        _isMounted = false;

        constructor(props) {
            super(props);

            this.targetRef = React.createRef();

            this.state = {
                SideShow: false,
                PageStation: false,
                SubPageCheck: true,
                onDevice: "PC",
                scrollY: 0,
            };
        }

        handleOnscroll = (e) => {
            if (window.scrollY > 0) this.setState({ scrollY: window.scrollY });
            else this.setState({ scrollY: window.scrollY });

            //console.log(window.scrollY);
        };

        componentDidMount() {
            this._isMounted = true;

            window.addEventListener("resize", this.handleResize);
            //window.addEventListener("scroll", this.handleOnscroll);

            if (this._isMounted && this.targetRef !== undefined) {
                if (this.targetRef.current.offsetWidth !== undefined) {
                    if (this.targetRef.current.offsetWidth > 1510) {
                        this.setState({
                            onDevice: "PC",
                        });
                    } else if (this.targetRef.current.offsetWidth <= 1510 && this.targetRef.current.offsetWidth > 1000) {
                        this.setState({
                            onDevice: "Tablet",
                        });
                    } else if (this.targetRef.current.offsetWidth <= 1000) {
                        this.setState({
                            onDevice: "Mobile",
                        });
                    }
                }
            }
        }

        componentWillUnmount() {
            this._isMounted = false;

            window.removeEventListener("resize", this.handleResize);
            //window.removeEventListener("scroll", this.handleOnscroll);
        }

        handleResize = (e) => {
            //console.log(this.targetRef.current.offsetWidth);
            if (this.targetRef !== undefined) {
                if (this.targetRef.current.offsetWidth !== undefined)
                    if (this.targetRef.current.offsetWidth > 1510) {
                        this.setState({
                            onDevice: "PC",
                        });
                    } else if (this.targetRef.current.offsetWidth <= 1510 && this.targetRef.current.offsetWidth > 1000) {
                        this.setState({
                            onDevice: "Tablet",
                        });
                    } else if (this.targetRef.current.offsetWidth <= 1000) {
                        this.setState({
                            onDevice: "Mobile",
                        });
                    }
            }
        };

        onHide = () => {
            this.setState({
                SideShow: false,
            });
        };

        render() {
            const { scrollY, onDevice, SideShow, PageStation } = this.state;

            return (
                <div ref={this.targetRef} className="App">
                    <Navi
                        {...this.props}
                        scrollY={scrollY}
                        onDevice={onDevice}
                        SubPageCheck={this.state.SubPageCheck}
                        forceFix
                        SideShow={SideShow}
                        onHide={() => {
                            this.setState({
                                SideShow: !SideShow,
                            });
                        }}
                    />

                    <SideMenu {...this.props} SideShow={SideShow} onHide={this.onHide} />

                    <Component
                        {...this.props}
                        ReadMyinfo={this.ReadMyinfo}
                        PageStation={PageStation}
                        onDevice={onDevice}
                        onPopup={(popup) => {
                            this.setState({
                                popup: { ...this.popup, ...popup },
                            });
                        }}
                    />
                </div>
            );
        }
    }

    return withRouter(WithNavi);
};

export default withNavi;
