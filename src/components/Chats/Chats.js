import React, { Component } from 'react';
import store from '../../store';
import { setTypingValue, deleteMessage } from '../../actions';
import './Chats.css';

const Chat = ({message}) => {
    const {text, is_user_msg, number} = message;
    const handleClick = () => {
        if (is_user_msg){
            store.dispatch(setTypingValue(text, number))
        }
    }
    const handleClose = () => {
        let { activeUserId } = store.getState();
        store.dispatch(deleteMessage(activeUserId, number));
    }
    return (
        <div className={`Chat ${is_user_msg ? 'is-user-msg' : ''}`}>
            <i className="Chat__close" onClick={handleClose}>{is_user_msg ? 'x' : ''}</i>
            <span onClick={handleClick} className="Chat__message">{text}</span>
        </div>
    )
}

class Chats extends Component {
    constructor(props) {
        super(props);
        this.chatsRef = React.createRef();
    }
    componentDidMount() {
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom();
    }
    scrollToBottom = () => {
        this.chatsRef.current.scrollTop = this.chatsRef.current.scrollHeight;
    }
    render() {
        return (
            <div className="Chats" ref={this.chatsRef}>
                {this.props.messages.map(message => (
                    <Chat message={message} key={message.number} />
                ))}
            </div>
        )
    }
}
export default Chats;