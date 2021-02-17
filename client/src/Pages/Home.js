import React from 'react'
import Post from '../Components/post/post.js';
import { getPosts } from './../actions/index.js';

function Home() {
    const posts = getPosts();
    console.log(posts);
    console.log(posts.PromiseResult);
    return (
        <div>
            <Post postedBy="Sarthak" heading="Spd kitna mc hai?" answers={[{ postedBy: "Sarthak", description: "Bohot zyada" }]}
            />
        </div>
    )
}

export default Home
