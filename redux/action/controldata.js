export const CONTROL_MENU = 'CONTROL_MENU';

export function setMenucontrol(showMenu) {
	return {
		type: CONTROL_MENU,
		showMenu
	};
}
