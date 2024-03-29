import React from 'react'

export default function MainContent({theme, posts}) {
    const mainStyle = {
        backgroundColor: theme === 'dark' ? 'grey' : 'white',
        color: theme === 'dark' ? 'black' : 'black',
        // padding: '10px',
        
     };
    if (posts.length === 0) {
        return (
            <main style={mainStyle}>
                <div>No Posts Available</div>
            </main>
        )
    }
  return (
    <main style={mainStyle}>
        <h2>Blog Posts</h2>
        <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
