import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import { TextInput } from 'flowbite-react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Button } from 'flowbite-react'
import { FaMoon } from 'react-icons/fa'

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to='/'className='self-center whitespace-nowrap text-sm sm:text-xl
        font-semibold dark:text-white'>
        blog
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white' >stack</span>
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
            <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          <Link to='/sign-in'>
            <Button className='' gradientDuoTone='purpleToBlue'>
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle/>
        </div>
          <Navbar.Collapse> {/*as {div} is added because we cant have 1 ancho inside the other*/}
            <Navbar.Link active={path === "/"} as={'div'}>
              <Link to='/'>Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={'div'}>
              <Link to='/about'>About</Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}

// export default function Header({theme, isLoggedIn, title, nav1, nav2,nav3}) {
//     const buttonText = isLoggedIn ? "Logout" : "Login";
//         // Define the dynamic styles based on the theme prop
//         const headerStyle = {
//         //    backgroundColor: theme === 'dark' ? 'black' : 'white',
//         //    color: theme === 'dark' ? 'white' : 'black',
//            padding: '10px',
//            textAlign: 'center',
//         };
//         const a = {color: theme === 'dark' ? 'white' : 'black',

//         }
//   return (
//     <header className="bg-black text-white" style={headerStyle} id='head'>
//         {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
//         <div>{title}</div>
//         <nav className="nav-bar">
//             <ul>
//                 <li style={a}>
//                     <a href="">{nav1}</a>
//                 </li>
//                 <li>
//                     <a href="">{nav2}</a>
//                 </li>
//                 <li>
//                     <a href="">{nav3}</a>
//                 </li>
//             </ul>
//         </nav>
//         {/* <a className="cta" href=""><button class="cv">Download <span>CV</span></button></a> */}
//         <button>{buttonText}</button>
//     </header>
//   )
// }
