import { GLOBAL_USER_COURSE } from '../action/authentication';
import todoAction from '../action/index';
const { AUTH_LOGIN, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT, GLOBAL_USER_EQUIPMENT, GLOBAL_USE_EQUIPMENT, GLOBAL_CEO_MAP, AUTH_USER } =
    todoAction.authentication;

const initialState = {
    userinfo: {},
    authuser: false,
    UserEquipmentList: [],
    isUserEquipmentList: false,
    UseEquipmentList: [],
    isUseEquipmentList: false,
    CeoMapList: [],
    isCeoMapList: false,
    CourseList: [],
    isCourseList: false,

    user: {},
};

/*

id: "thefreshop"
member_birth: "1984-01-09"
member_city: "구미시"
member_email: "thefreshop@thefreshop.co.kr"
member_grade: ""
member_level: "강사"
member_name: "송영내"
member_phone: "01032008857"
member_sex: "남성"
role: "member"
verified: "false"


*/

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_LOGIN:
            return {
                ...state,
            };
        case AUTH_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                authuser: true,
                userinfo: action.userinfo,
            });
        case AUTH_LOGIN_FAILURE:
            return Object.assign({}, state, {
                authuser: false,
            });
        case AUTH_LOGOUT:
            return initialState;
        case GLOBAL_USER_EQUIPMENT:
            return {
                ...state,
                UserEquipmentList: action.UserEquipmentList,
                isUserEquipmentList: true,
            };
        case GLOBAL_USE_EQUIPMENT:
            return {
                ...state,
                UseEquipmentList: action.UseEquipmentList,
                isUseEquipmentList: true,
            };
        case GLOBAL_CEO_MAP:
            return {
                ...state,
                CeoMapList: action.CeoMapList,
                isCeoMapList: true,
            };
        case GLOBAL_USER_COURSE:
            return {
                ...state,
                CourseList: action.CourseList,
                isCourseList: true,
            };
        case AUTH_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default authentication;
