import React from 'react';
import './post.css';
function post(props) {
    return (
        <div>
            <div className="post">
                <h2 className="post-h2">{props.heading}</h2>
                <p className="post-poster">Posted by - {props.postedBy}</p>
            </div>
            <br />
            <div className="post post-answer">
                <p className="post-answerer">Answered by -{props.answers[0].postedBy}</p> <br />
                <p>{props.answers[0].description}</p>
            </div>
        </div>
    );
}

export default post
