import React from 'react'

export default function Header() {
  return (
    <header className='head'>
        <div class="logo">blog app</div>
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <nav className="nav-bar">
            <ul>
                <li>
                    <a href="" class="active">Home</a>
                </li>
                <li>
                    <a href="">blogs</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>
            </ul>
        </nav>
        {/* <a className="cta" href=""><button class="cv">Download <span>CV</span></button></a>
        <a className="cta" href=""><button class="contact">Contact</button></a> */}
    </header>
  )
}
