/**
 * 3 Konsep Utama :
 * 1. store : menyimpan state dari aplikasi
 * 2. reducer : mengubah state berdasarkan action/dispatch
 * 3. action (dispatch) : fungsi yang akan dikirimkan ke reducer untuk mengubah state
 * 
 * penitipan sepatu
 * 1. store : rak sepatu
 * 2. reducer : penjagga rak sepatu, kita sebut namanya jono
 * 3. action (dispatch) : pemilik sepatu
 */

const Redux = require('redux');

const initialState = {
    shoes: 0
}

const ACTIONS = {
    TITIP_SEPATU: 'TITIP_SEPATU',
    AMBIL_SEPATU: 'AMBIL_SEPATU'
}

/**
 * state : jika awal pertama kali dikirimkan ke createStore, 
 * value yang digunakan adalah initialState
 * 
 * dispatch : object yang terdiri dari property 'type' dan 'payload'
 * {
 * type : string
 * payload : any
 * }
 * dispatch === action
 */

const jonoReducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case ACTIONS.TITIP_SEPATU:
            return { shoes: state.shoes + action.payload }
        case ACTIONS.AMBIL_SEPATU:
            return { shoes: state.shoes - action.payload }
        default:
            return state;
    }
}

const shoeStore = Redux.createStore(jonoReducer);

// shoeStore.getState();
// shoeStore.dispatch();
const unsubscribe = shoeStore.subscribe(()=> console.log('apasih',shoeStore.getState()));

shoeStore.dispatch({type: ACTIONS.TITIP_SEPATU, payload: 1})
shoeStore.dispatch({type: ACTIONS.TITIP_SEPATU, payload: 3})
shoeStore.dispatch({type: ACTIONS.AMBIL_SEPATU, payload: 1})

// menghentikan listener
unsubscribe();

const mapDispatchToProps = (dispatch) => {
    return {
        titipSepatu: (sepatu) => dispatch({type: ACTIONS.TITIP_SEPATU, payload: sepatu}),
        ambilSepatu: (sepatu) => dispatch({type: ACTIONS.AMBIL_SEPATU, payload: sepatu}),
    }
}

const mapStateToProps = (state) => {
    return state.shoes
}

const commands = mapDispatchToProps(shoeStore.dispatch);
const state = mapStateToProps(shoeStore.getState());

commands.titipSepatu(2);

console.log('state : ', shoeStore.getState());

commands.ambilSepatu(1);
console.log('state : ', shoeStore.getState());