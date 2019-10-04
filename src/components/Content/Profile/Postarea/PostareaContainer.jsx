import Postarea from "./Postarea";
import Post from "./Post/Post";
import React from "react";
import {actionAddPost, actionUpdatePost} from "../../../../Redux/profile-reducer";


const PostareaContainer = (props) => {
    let postElement = props.posts.map((el) => {return(<Post text={el.text}/>)});

    let refElement = React.createRef();

    let start = () => {

        props.dispatch(actionAddPost());
    }

    let change = (text) => {

        props.dispatch(actionUpdatePost(text));
    }
    return (
        <Postarea AddPost={start} UpdatePost={change} posts={props.posts}/>
    )
}

export default PostareaContainer;