import React from 'react';
import css from './Post.module.css';

const Post = (props) => {

    return (
        <div>
            <div className={css.post}>
                <span><img src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg'></img></span>
                <div className={css.comment}>

                        {props.text}

                </div>
                <button>like</button>
            </div>
        </div>
    )
}

export default Post;