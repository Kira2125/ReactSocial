import React from 'react';
import Post from './Post/Post'
import css from './Postarea.module.css';


const Postarea = (props) => {
    let postElement = props.posts.map((el) => {return(<Post text={el.text}/>)});

    let refElement = React.createRef();

    let start = () => {

        props.AddPost();
    }

    let change = () => {

        let text = refElement.current.value;
        props.UpdatePost(text);
    }

    return (
        <div>
            <div>
                <textarea ref={refElement} onChange={change} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={start}>ADD POST</button>
            </div>
            <div className={css.postarea}>
                {postElement}
            </div>
        </div>
    )
}

export default Postarea;