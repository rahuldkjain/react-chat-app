import React from 'react';
import Empty from '../Empty/Empty';
import ChatWindow from '../../containers/ChatWindow/ChatWindow';
import './Main.css';

const Main = ({ user, activeUserId }) => {
    const renderMainContent = () => {
        if (!activeUserId) {
            return <Empty user={user} activeUserId={activeUserId} />
        } else {
            return <ChatWindow activeUserId={activeUserId} />
        }
    }
    return <main className="Main">{renderMainContent()}</main>
}

export default Main;