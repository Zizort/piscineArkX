import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Paragraph1 from './Paragraph1';
import Paragraph2 from './Paragraph2';
import Paragraph3 from './Paragraph3';
import Paragraph4 from './Paragraph4';
import Paragraph5 from './Paragraph5';

function App() {
  // const [count, setCount] = useState(0)
  let name = "abdelaziz";
  return (
    <>
      <h1>hi {name}</h1>
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <h2>Thank you {name}</h2>
    </>
  )
}

export default App
