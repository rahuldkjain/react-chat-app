import React from 'react';
import store from '../../store';
import Header from '../../components/Header/Header';
import Chats from '../../components/Chats/Chats';
import MessageInput from '../MessageInput/MessageInput';
import _ from 'lodash';
import './ChatWindow.css';

const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts[activeUserId];
    const activeMsgs = state.messages[activeUserId];
    const { typing } = state;
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeMsgs)} />
            <MessageInput value={typing.value} />
        </div>
    )
}

export default ChatWindow;