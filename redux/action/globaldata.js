export const GLOBAL_FACILITY = 'GLOBAL_FACILITY';
export const GLOBAL_EQUIPMENT = 'GLOBAL_EQUIPMENT';
export const GLOBAL_NOTICE = 'GLOBAL_NOTICE';
export const GLOBAL_FAQ = 'GLOBAL_FAQ';
export const GLOBAL_GALLERY = 'GLOBAL_GALLERY';
export const GLOBAL_RESERVATION_EQUIPMENT = 'GLOBAL_RESERVATION_EQUIPMENT';
export const GLOBAL_EDU = 'GLOBAL_EDU';
export const GLOBAL_BANNER = 'GLOBAL_BANNER';

export function setFacilityList(FacilityList) {
	return {
		type: GLOBAL_FACILITY,
		FacilityList
	};
}

export function setEquipmentList(EquipmentList) {
	return {
		type: GLOBAL_EQUIPMENT,
		EquipmentList
	};
}

export function setNoticeList(NoticeList) {
	return {
		type: GLOBAL_NOTICE,
		NoticeList
	};
}

export function setFAQList(FAQList) {
	return {
		type: GLOBAL_FAQ,
		FAQList
	};
}

export function setGalleryList(GalleryList) {
	return {
		type: GLOBAL_GALLERY,
		GalleryList
	};
}

export function setReservationEquipment(ReservationEquipment) {
	return {
		type: GLOBAL_RESERVATION_EQUIPMENT,
		ReservationEquipment
	};
}

export function setEdu(Edu) {
	return {
		type: GLOBAL_EDU,
		Edu
	};
}

export function setBanner(Banner) {
	return {
		type: GLOBAL_BANNER,
		Banner
	};
}
