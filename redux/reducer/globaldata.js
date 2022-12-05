import { GLOBAL_EDU } from '../action/globaldata';
import todoAction from '../action/index';
const { GLOBAL_FACILITY, GLOBAL_EQUIPMENT, GLOBAL_NOTICE, GLOBAL_FAQ, GLOBAL_GALLERY, GLOBAL_RESERVATION_EQUIPMENT, GLOBAL_BANNER } = todoAction.globaldata;

const initialState = {
	FacilityList: [],
	isFacilityList: false,
	EquipmentList: [],
	isEquipmentList: false,
	NoticeList: [],
	isNoticeList: false,
	FAQList: [],
	isFAQList: false,
	GalleryList: [],
	isGalleryList: false,
	ReservationEquipment: [],
	isReservationEquipment: false,
	Edu: [],
	isEdu: false,
	Banner: [],
	isBanner: false
};

const globaldata = (state = initialState, action) => {
	switch (action.type) {
		case GLOBAL_FACILITY:
			return {
				...state,
				FacilityList: action.FacilityList,
				isFacilityList: true
			};
		case GLOBAL_EQUIPMENT:
			return {
				...state,
				EquipmentList: action.EquipmentList,
				isEquipmentList: true
			};
		case GLOBAL_NOTICE:
			return {
				...state,
				NoticeList: action.NoticeList,
				isNoticeList: true
			};
		case GLOBAL_FAQ:
			return {
				...state,
				FAQList: action.FAQList,
				isFAQList: true
			};
		case GLOBAL_GALLERY:
			return {
				...state,
				GalleryList: action.GalleryList,
				isGalleryList: true
			};
		case GLOBAL_RESERVATION_EQUIPMENT:
			return {
				...state,
				ReservationEquipment: action.ReservationEquipment,
				isReservationEquipment: true
			};
		case GLOBAL_EDU:
			return {
				...state,
				Edu: action.Edu,
				isEdu: true
			};
		case GLOBAL_BANNER:
			return {
				...state,
				Banner: action.Banner,
				isBanner: true
			};
		default:
			return state;
	}
};

export default globaldata;
