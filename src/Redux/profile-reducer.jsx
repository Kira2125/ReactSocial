

let initialState = {
    postDate: [{text: "Somebody ones told me world is gonna roll me ..."}, {text: "cho"}, {text: "kavo"}],
    newPostText: "something very cool!",
};

const profileReducer = (state = initialState, action) => {
    if(action.type === 'addPost') {
        let newPost = {
            text: state.newPostText,
        }
        state.postDate.push(newPost);
        state.newPostText = "";
    } else if(action.type === 'updatePost') {
        state.newPostText = action.newText;
    }
    return state;
}

export const actionAddPost = () => {
    return {
        type: "addPost",
    }
}

export const actionUpdatePost = (text) => {
    return {
        type: "updatePost",
        newText: text,
    }
}

export default profileReducer;