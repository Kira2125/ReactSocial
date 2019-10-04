import React from 'react';

import css from './Profile.module.css';
import PostareaContainer from "./Postarea/PostareaContainer";

const Profile = (props) => {
    return (
      <div>
        <div><img src='http://www.kartinki24.ru/uploads/gallery/main/2/kartinki24_ru_abstract_88.jpg' className={css.dark}></img></div>
        <div className={css.ava}>
          <div><img src='https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg' className={css.light}></img></div>
          <div>My name</div>
        </div>
        <PostareaContainer posts={props.posts} dispatch={props.dispatch}
                  newPostText={props.newPostText} />

        
      </div>
    )
}

export default Profile;