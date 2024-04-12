import React from 'react'
import { useState } from 'react'


export default function Blogform() {
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
    
        const post = {title, text}
        
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const json = await response.json()
    
        if (!response.ok) {
          setError(json.error)
        }
        if (response.ok) {
          setError(null)
          setTitle('')

          console.log('new blog added:', json)
        }
    
      }
    

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Blog</h3>

      <label>Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>text:</label>
      {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
      <input 
        type="text" 
        onChange={(e) => setText(e.target.value)} 
        value={text} 
      />

      <button>Add post</button>
      {error && <div className="error">{error}</div>}
    </form>

  )
}
