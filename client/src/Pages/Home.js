import React from 'react'
import Post from '../Components/post/post.js';
function Home() {
    return (
        <div>
            <Post postedBy="Sarthak" heading="Spd kitna mc hai?" answers={[{postedBy:"Sarthak",description:"Bohot zyada"}]}
            />
        </div>
    )
}

export default Home
