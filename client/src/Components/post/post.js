import React from 'react';
import './post.css';
function post(props) {
    return (
        <div className="post">
            <div className="post-question">
                <h2 className="post-question-heading">{props.heading}</h2>
                <p className="post-question-user">Posted by - {props.postedBy}</p> 
                <p className="post-question-user">Posted by - {props.postedBy}</p>
            </div>
            <br />
            <div className="post-answer">
                <p className="post-answere-user">Answered by -{props.answers[0].postedBy}</p> <br />
                <p>{props.answers[0].description}</p>
            </div>
        </div>
    );
}

export default post
