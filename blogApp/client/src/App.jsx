import { useState } from 'react';
// import './reet.css'
// import {blogTitle} from './index.js'
import * as arg from './index.js'
import Header from './components/Header.jsx'
import MainContent from './MainContent'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import About from './About.jsx';
import FooterCom from './components/Footer.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
    <>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
      <FooterCom />
    </BrowserRouter>
    </>
  )
}

export default App

// return (
//   <>
//   {/* <Header theme={arg.theme} isLoggedIn={isLoggedIn} title={arg.blogTitle} nav1='blogs' nav2='login' nav3='sign up'/>
//   <MainContent theme={arg.theme} posts={arg.posts}/> */}
//   </>
// )