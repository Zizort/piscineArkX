// import { useState } from 'react';
import './App.css'
import './reet.css'
// import {blogTitle} from './index.js'
import * as arg from './index.js'
import Header from './Header'
import MainContent from './MainContent'
import React from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <>
    <Header theme={arg.theme} isLoggedIn={isLoggedIn} title={arg.blogTitle} nav1='blogs' nav2='login' nav3='sign up'/>
    <MainContent theme={arg.theme} posts={arg.posts}/>
    </>
  )
}

export default App
