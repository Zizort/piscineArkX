import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/posts/${id}`)
            const json = await response.json(); //array of posts

            if (response.ok) {
                setPost(json);
            }
        }

        fetchPosts();
    },[id] /*empty because fire once*/)
    // const post = postsData.find(post => post._id === id);
   
    if (!post) {
       return <div>Post not found</div>;
    }
   
    return (
       <div>
         <h2>{post.title}</h2>
         <p>{post.text}</p>
       </div>
    );
   }
