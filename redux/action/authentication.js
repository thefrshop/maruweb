// action type
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILURE = 'AUTH_LOGIN_FAILURE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const AUTH_USER = 'AUTH_USER';

export function login() {
    return {
        type: AUTH_LOGIN,
    };
}

export function setUser(user) {
    return {
        type: AUTH_USER,
        user,
    };
}

export function logout() {
    return {
        type: AUTH_LOGOUT,
    };
}

export function loginSuccess(userinfo) {
    return {
        type: AUTH_LOGIN_SUCCESS,
        userinfo,
    };
}

export function loginFailure() {
    return {
        type: AUTH_LOGIN_FAILURE,
    };
}

export const GLOBAL_USE_EQUIPMENT = 'GLOBAL_USE_EQUIPMENT';
export const GLOBAL_USER_EQUIPMENT = 'GLOBAL_USER_EQUIPMENT';
export const GLOBAL_CEO_MAP = 'GLOBAL_CEO_MAP';
export const GLOBAL_USER_COURSE = 'GLOBAL_USER_COURSE';

export function setUseEquipmentList(UseEquipmentList) {
    return {
        type: GLOBAL_USE_EQUIPMENT,
        UseEquipmentList,
    };
}

export function setUserEquipmentList(UserEquipmentList) {
    return {
        type: GLOBAL_USER_EQUIPMENT,
        UserEquipmentList,
    };
}

export function setCeoMapList(CeoMapList) {
    return {
        type: GLOBAL_CEO_MAP,
        CeoMapList,
    };
}

export function setCourseList(CourseList) {
    return {
        type: GLOBAL_USER_COURSE,
        CourseList,
    };
}
