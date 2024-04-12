import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/posts')
            const json = await response.json(); //array of posts

            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPosts();
    },[] /*empty because fire once*/)
  return (
    <div className='home' style={{ padding: '20px' }}>
        <Link to={'/post/form'}>
        <button>add a new post</button>
        </Link>
      <div className="post">
        {posts && posts.map((post) => (
          <div key={post._id} className="post" style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
            <Link to={`/post/${post._id}`}>
              <h2 style={{ marginBottom: '10px' }}>{post.title}</h2>
            </Link>
              <p className='preview'>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
