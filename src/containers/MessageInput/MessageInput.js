import React from 'react';
import store from '../../store';
import { setTypingValue, sendMessage } from '../../actions';
import './MessageInput.css';

const MessageInput = ({ value }) => {
    const handleChange = (e) => {
        const { typing } = store.getState();
        store.dispatch(setTypingValue(e.target.value, typing.number));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { typing, activeUserId } = store.getState();
        store.dispatch(sendMessage(typing.value, activeUserId, typing.number));
    }
     return (
        <form className="Message" onSubmit={handleSubmit}>
            <input 
                className="Message__input"
                onChange={handleChange}
                value={value}
                placeholder="write a message"
            />
        </form>
    )
}
export default MessageInput;