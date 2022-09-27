import { createAsyncThunk, createSlice, createStore } from "@reduxjs/toolkit";
import uniqid from "uniqid";
import * as API from "../../api/dataAPI";

const initialState = {
  units: [],
  isLoading: true,
  action: null,
};

export const fetchUnits = createAsyncThunk("units/getAll", async () => {
  const units = await API.getAllUnits();

  return units;
});

// export const addLockers = createAsyncThunk("lockerss/add", async (locker) => {
//   locker.id = uniqid();

//   const lockerData = await API.addLockers(locker);
//   return lockerData;
// });

// export const closeLockers = createAsyncThunk("locker/close", async (locker) => {
//   await API.closeLockers(locker);
//   return locker;
// });

// export const openLockers = createAsyncThunk("lockker/open", async (locker) => {
//   await API.openLockers(locker);
//   return locker;
// });

// export const putShoes = createAsyncThunk("lockeer/put", async (locker) => {
//   await API.putShoes(locker);
//   return locker;
// });

// export const takeShoes = createAsyncThunk("lockerrr/take", async (locker) => {
//   await API.takeShoes(locker);
//   return locker;
// });

export const unitsSlice = createSlice({
  name: "units",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchUnits.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUnits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.units = action.payload;
      });
    //   .addCase(addLockers.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(addLockers.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.action = Date.now();
    //   })
    //   .addCase(putShoes.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(putShoes.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.action = Date.now();
    //   })

    //   .addCase(closeLockers.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(closeLockers.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.action = Date.now();
    //   })

    //   .addCase(openLockers.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(openLockers.fulfilled, (state) => {
    //     state.isLoading = false;
    //     state.action = Date.now();
    //   })

    //   .addCase(takeShoes.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(takeShoes.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.action = Date.now();
    //   });
  },
});

//export const lockerUnits = createStore(unitsSlice);

// export const initialState = {
//   lockers: [],
//   lastId: 6
// }

// for (let id = 1; id <= 6; id++) {
//   initialState.lockers.push({
//     id,
//     shoes: 0,
//     closed: false
//   });
// }

// export const LOCKER_ACTIONS = {
//   ADD_LOCKER: 'ADD_LOCKER',
//   CLOSE_LOCKER: 'CLOSE_LOCKER',
//   OPEN_LOCKER: 'OPEN_LOCKER',
//   PUT_SHOES: 'PUT_SHOES',
//   TAKE_SHOES: 'TAKE_SHOES'
// }

// /**
//  *
//  * @param { lockers } state
//  * @param { type, payload } action
//  */
// export function lockerReducer(state = initialState, action) {
//   const { type, payload } = action;
//   switch(type) {
//     case LOCKER_ACTIONS.ADD_LOCKER:
//       return {
//         lockers: [ ...state.lockers, { id: state.lastId + 1, shoes: 0, closed: false } ],
//         lastId: state.lastId + 1
//       }
//     case LOCKER_ACTIONS.OPEN_LOCKER:
//       return {
//         ...state,
//         lockers: state.lockers.map((locker) => {
//           if (payload.id === locker.id) {
//             locker.closed = false;
//           }

//           return locker;
//         })
//       }
//     case LOCKER_ACTIONS.CLOSE_LOCKER:
//       return {
//         ...state,
//         lockers: state.lockers.map((locker) => {
//           if (payload.id === locker.id) {
//             locker.closed = true;
//             locker.shoes = 0;
//           }

//           return locker;
//         })
//       }
//     case LOCKER_ACTIONS.PUT_SHOES:
//       return {
//         ...state,
//         lockers: state.lockers.map((locker) => {
//           if (payload.id === locker.id) {
//             locker.shoes = payload.shoes;
//           }

//           return locker;
//         })
//       };
//     case LOCKER_ACTIONS.TAKE_SHOES:
//       return {
//         ...state,
//         lockers: state.lockers.map((locker) => {
//           if (payload.id === locker.id) {
//             locker.shoes = 0;
//           }

//           return locker;
//         })
//       };
//     default:
//       return state;
//   }
// }

// export const lockerStore = createStore(lockerReducer);
