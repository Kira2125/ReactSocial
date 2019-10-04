import React from 'react';
import {NavLink} from "react-router-dom";
import {actionAddMessage, actionUpdateMessage} from "../../../Redux/message-reducer";
import Messages from "./Messages";



const MessagesContainer = (props) => {



    let clickFun = () => {
        props.dispatch(actionAddMessage());
    }

    let changeText = (text) => {

        props.dispatch(actionUpdateMessage(text));
    }

    return (
       <Messages UpdateMessage={changeText} AddMessage={clickFun} uDate={props.messages.userDate} mDate={props.messages.messageDate}/>
    )
}

export default MessagesContainer;