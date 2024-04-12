import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import BlogPost from './pages/BlogPost';
import Blogform from './pages/Blogform';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path='/'
              element={<Home />}
            />
            <Route
              path='post/:id'
              element={<BlogPost />}
            />
            <Route
              path='post/form'
              element={<Blogform />}
            />
          </Routes>
        </div>
      </BrowserRouter>
      
    </>
  )
}

export default App
