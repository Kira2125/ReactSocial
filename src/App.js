import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Content/Profile/Profile';
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Setting from "./components/Content/Setting/Setting";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";


const App = (props) => {
  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>

          <div className='content'>
            <Route path='/profile' render={() => <Profile posts={props.state.profilePage.postDate}
                                                          newPostText={props.state.profilePage.newPostText}
                                                          dispatch={props.dispatch}/>}/>
            <Route path='/messages' render={() => <MessagesContainer messages={props.state.messagePage}
                                                    newMessageText={props.state.messagePage.newMessageText}
                                                    dispatch={props.dispatch}/>}/>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/setting' component={Setting}/>
          </div>
        </div>
      </BrowserRouter>
  )
}

export default App;
