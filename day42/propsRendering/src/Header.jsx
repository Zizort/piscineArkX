import React from 'react'

export default function Header({theme, isLoggedIn, title, nav1, nav2,nav3}) {
    const buttonText = isLoggedIn ? "Logout" : "Login";
        // Define the dynamic styles based on the theme prop
        const headerStyle = {
           backgroundColor: theme === 'dark' ? 'black' : 'white',
           color: theme === 'dark' ? 'white' : 'black',
           padding: '10px',
           textAlign: 'center',
        };
        const a = {color: theme === 'dark' ? 'white' : 'black',

        }
  return (
    <header style={headerStyle} className='head'>
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
        <div>{title}</div>
        <nav className="nav-bar">
            <ul>
                <li style={a}>
                    <a href="">{nav1}</a>
                </li>
                <li>
                    <a href="">{nav2}</a>
                </li>
                <li>
                    <a href="">{nav3}</a>
                </li>
            </ul>
        </nav>
        {/* <a className="cta" href=""><button class="cv">Download <span>CV</span></button></a> */}
        <button>{buttonText}</button>
    </header>
  )
}
