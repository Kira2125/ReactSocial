

let initialState = {
    userDate: [{name: "John" , id: "1"}, {name: "Ferdinand Porshe" , id: "2"}, {name: "Gerodot" , id: "3"}],
    messageDate: [{message: "WWat's up man?"}, {message: "No no no"}],
    newMessageText: "what you want to send?",
};

const messageReducer = (state = initialState, action) => {
    if(action.type === 'addMessage') {
        let newMessage = {
            message: state.newMessageText,
        }
        state.messageDate.push(newMessage);
        state.newMessageText = "";
    } else if(action.type === 'updateMessage') {
        state.newMessageText = action.mesText;
    }
    return state;
}

export const actionAddMessage = () => {
    return {
        type: "addMessage",
    }
}

export const actionUpdateMessage = (text) => {
    return {
        type: "updateMessage",
        mesText: text,
    }
}

export default messageReducer;