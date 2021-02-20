import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { answer } from '../../actions/index.js';
import './answer.css';


const AnswerQuestion = (props) => {
    const [data, changeData] = useState({ heading: '', description: '', tags: '', postedBy: "admin" });

    const dispatch = useDispatch();


    function clean() {
        changeData({ heading: '', description: '', tags: '', postedBy: "admin" });
    }
    function clear() {
        dispatch({ type: 'Reset' });
        clean();
    }
    function handleSubmit(e) {
        e.preventDefault();
        answer({ answer: data, questionId: props.questionId });
        clean();
    }

    const status = useSelector((state) => state.message.status);

    return <div className="Askform shadow-lg">
        <div className="form-group" >
            <label>{props.questionHeading}</label>
        </div>
        <form onSubmit={handleSubmit} >
            <div className="form-group" >
                <label>Answer</label>
                <textarea value={data.heading} className="form-control" rows="3" onChange={(e) => { changeData({ ...data, heading: e.target.value }); }} placeholder="Enter your answer here..." required></textarea>
            </div>
            <button type="submit" className="btn btn-danger askFormButton" >Ask</button>
            <button type="button" className="btn btn-primary clearButton" onClick={clear} >Clear</button>

            <div className="relative w-full mb-3 mt-8" style={{ display: `${status === 2 ? 'block' : 'none'}` }}>
                <div class="alert alert-danger" role="alert">
                    Some error was encountered!
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div className="relative w-full mb-3 mt-8" style={{ display: `${status === 1 ? 'block' : 'none'}` }}>
                <div class="alert alert-success" role="alert">
                    Your message has been sent successfully!
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
}

export default AnswerQuestion;