import { AMBIL_TITIP_ITEM, BUKA_TUTUP_LOCKER, TAMBAH_LOCKER } from "../action/actionTypes";

const initialState = {
  lockers: [{
    open : true,
    status: false,
}],
};

export const lockerReducer = (state = initialState, action) => {
    let newValue = state?.lockers;
    switch (action.type) {
        case BUKA_TUTUP_LOCKER:
        newValue[action.payload].open = !newValue[action.payload]?.open; 
        return {
            ...state,
            lockers: newValue,
        };
        case AMBIL_TITIP_ITEM:
        newValue[action.payload].status = !newValue[action.payload].status; 
        return {
            ...state,
            lockers: newValue,
        };
        case TAMBAH_LOCKER:
        return {
            ...state,
            lockers: [...state.lockers, {
                open: true,
                status: false
            }],
        };
        default:
        return state;
    }
};