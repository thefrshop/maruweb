import { GLOBAL_EDU } from '../action/globaldata';
import todoAction from '../action/index';
const { CONTROL_MENU } = todoAction.controldata;

const initialState = {
	isshowMenu: false,
	showMenu: []
};

const controldata = (state = initialState, action) => {
	switch (action.type) {
		case CONTROL_MENU:
			return {
				...state,
				showMenu: action.showMenu,
				isshowMenu: true
			};

		default:
			return state;
	}
};

export default controldata;
