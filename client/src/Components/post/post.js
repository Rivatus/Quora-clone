import React from 'react';
import './post.css';
function post(props) {
    return (
        <div>
            <div>
                <h2 className="post-h2">{props.heading}</h2>
                <p>Posted by - {props.postedBy}</p>
            </div>
            <div>
                <h2 className="post-h2">Answered by - {props.answers[0].postedBy}</h2>
                <p>{props.answers[0].description}</p>
            </div>
        </div>
    );
}

export default post
