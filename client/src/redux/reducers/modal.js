import { OPEN_MODAL } from "../action/actionConstant";

const initialState = {
    openModal: false
};

export default function modal(state = initialState, action){
    console.log(action);
    switch(action.type){
        case OPEN_MODAL:
            return {...state, ...action.payload };
        default: 
            return state;
    }
}