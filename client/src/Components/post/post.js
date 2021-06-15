import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import './post.css';

function post(props) {

    console.log(props.answer.description);

    return (
        <div className="post">
            <div className="post-question">
                <h2 className="post-question-heading">{props.heading}</h2>
                {props.postedBy && <p className="post-question-user">Posted by - {props.postedBy}</p>}
                <Link
                    class="post-answer-btn"
                    to={{ pathname: `/answer/${props.id}`, state: { heading: props.heading } }}
                    style={{ textDecoration: "none", color: "black" }}  >
                    <i class="fas fa-user-edit" />
                    <p className="post-hide">Answer this question</p>
                </Link>
            </div>
            <br />
            {props.answer && <div className="post-answer">
                <p className="post-answerer">Answered by - {props.answer?.userId.name}</p>
                <div> {ReactHtmlParser(props.answer?.description)} </div>
            </div>}
        </div>
    );
}

export default post
