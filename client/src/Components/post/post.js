import React from 'react';
import './post.css';

function post(props) {


    function Answer() {
        props.history.push({ pathname: `/answer/${props.id}`, state: { heading: props.heading } });
    }

    return (
        <div className="post">
            <div className="post-question">
                <h2 className="post-question-heading">{props.heading}</h2>
                {props.postedBy && <p className="post-question-user">Posted by - {props.postedBy}</p>}
                <button class="post-answer-btn" onClick={Answer}><i class="fas fa-user-edit"></i></button>
                <p className="post-hide">Answer this question</p>
            </div>
            <br />
            {props.answers && <div className="post-answer">
                <p className="post-answerer">Answered by -{props?.answers[0].postedBy}</p> <br />
                <p>{props?.answers[0].description}</p>
            </div>}
        </div>
    );
}

export default post
