import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
    _state: {
        messagePage: {userDate: [{name: "John" , id: "1"}, {name: "Ferdinand Porshe" , id: "2"}, {name: "Gerodot" , id: "3"}],
            messageDate: [{message: "WWat's up man?"}, {message: "No no no"}],
            newMessageText: "what you want to send?",},
        profilePage: {postDate: [{text: "Somebody ones told me world is gonna roll me ..."}, {text: "cho"}, {text: "kavo"}],
            newPostText: "something very cool!",}
    },

    getState() {
        return this._state;
    },

    _callSubscriber(){},

    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._callSubscriber(this._state);
    }

}



export default store;
window.store = store;