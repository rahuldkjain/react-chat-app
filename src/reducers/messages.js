import { getMessages } from '../static-data';
import { SEND_MESSAGE, DELETE_MESSAGE } from '../constants/action-types';
import _ from 'lodash';
export default function messages(state = getMessages(10), action) {
    switch(action.type) {
        case SEND_MESSAGE:
            let { message, userId, number } = action.payload;
            let allUserMsgs = state[userId];
            if (!number) {
                number = +_.keys(allUserMsgs).pop() + 1;
            }
            return {
                ...state,
                [userId]: {
                    ...allUserMsgs,
                    [number]: {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            };
        case DELETE_MESSAGE:
            let {activeUserId, msgNumber} = action.payload
            let allMsgs = state[activeUserId];
            delete allMsgs[msgNumber];
            return {
                ...state,
                [activeUserId]: {
                    ...allMsgs
                }
            }
        default: return state
    }
}