import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, DELETE_MESSAGE } from '../constants/action-types';

export const setActiveUserId = userId => ({
    type: SET_ACTIVE_USER_ID,
    payload: userId
});

export const setTypingValue = (value, number) => ({
    type: SET_TYPING_VALUE,
    payload: {
        value,
        number
    }
});

export const sendMessage = (message, userId, number) => {
    return ({
        type: SEND_MESSAGE,
        payload: {
            message,
            userId,
            number
        }
    })
}

export const deleteMessage = (activeUserId, number) => {
    return ({
        type: DELETE_MESSAGE,
        payload: {
            activeUserId,
            msgNumber: number
        }
    })
}

