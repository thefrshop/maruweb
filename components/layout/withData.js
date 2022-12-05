import React from "react";
import { connect } from "react-redux";

import { setBanner } from "../../redux/action/globaldata";
import { setMenucontrol } from "../../redux/action/controldata";
import {
    setUser,
    loginSuccess,
    login,
    logout,
} from "../../redux/action/authentication";
const withData = (Component) => {
    class WithData extends React.Component {
        _isMounted = false;

        constructor(props) {
            super(props);

            this.state = {};
        }

        componentDidMount() {
            this._isMounted = true;
        }

        componentWillUnmount() {
            this._isMounted = false;
        }

        render() {
            return <Component {...this.props} />;
        }
    }

    const mapStateToProps = (state) => {
        return {
            Banner: state.globaldata.Banner,
            isBanner: state.globaldata.isBanner,
            isshowMenu: state.controldata.isshowMenu,
            showMenu: state.controldata.showMenu,
            user: state.authentication.user,
            authuser: state.authentication.authuser,
            userinfo: state.authentication.userinfo,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            SetBanner: (Banner) => {
                return dispatch(setBanner(Banner));
            },
            SetMenucontrol: (Banner) => {
                return dispatch(setMenucontrol(Banner));
            },
            SetAuthUser: (User) => {
                return dispatch(setUser(User));
            },

            SetLoginSuccess: (Userinfo) => {
                return dispatch(loginSuccess(Userinfo));
            },
            SetLogin: () => {
                return dispatch(login());
            },
            SetLogout: () => {
                return dispatch(logout());
            },
        };
    };

    return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default withData;
