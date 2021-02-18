import React from 'react'
import Post from '../Components/post/post.js';
import { getPosts } from './../actions/index.js';

function Home() {
    getPosts().then((response) => console.log(response))
        .catch((error) => console.log(error));

    return (
        <div>
            <Post postedBy="Sarthak" heading="Spd kitna mc hai?" answers={[{ postedBy: "Sarthak", description: "Bohot zyada" }]}
            />
        </div>
    )
}

export default Home
