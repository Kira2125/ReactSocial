import React from 'react';
import css from './Messages.module.css';
import {NavLink} from "react-router-dom";

const User = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Chat = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}


const Messages = (props) => {

    let userElem = props.uDate.map((el) => {
        return (<User name={el.name} id={el.id}/>)
    });
    let messageElem = props.mDate.map((el) => {
        return (<Chat message={el.message}/>)
    });

    let refElement = React.createRef();

    let clickFun = () => {
        props.AddMessage();
    }

    let changeText = (e) => {
        let text = e.target.value;
        props.UpdateMessage(text);
    }

    return (
        <div className={css.messages}>
            <div className={css.Users}>
                {userElem}
            </div>
            <div className={css.chats}>
                {messageElem}
            </div>
            <div>
                <textarea onChange={changeText}  value={props.newMessageText}/>
                <button onClick={clickFun}>SEND MESSAGE</button>
            </div>

        </div>
    )
}

export default Messages;

