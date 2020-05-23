import { SET_TYPING_VALUE, SEND_MESSAGE } from '../constants/action-types';
export default function typing(state = {value: '', number: null}, action) {
    switch(action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case SEND_MESSAGE:
            return {value: '', number: null}
        default: return state;
    }
}