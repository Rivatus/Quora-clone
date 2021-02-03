import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../../actions/index.js';
import './ask.css';


const AskForm = () => {
    const [data, changeData] = useState({ heading: '', description: '', tags: '', postedBy: "admin" });

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(askQuestion(data));
    }

    return <div className="Askform shadow-lg">
        <form onSubmit={handleSubmit} >
            <div className="form-group" >
                <label>Question</label>
                <textarea value={data.heading} className="form-control" rows="3" onChange={(e) => { changeData({ ...data, heading: e.target.value }); }} placeholder="Enter your question here..." required></textarea>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea value={data.description} className="form-control" rows="5" onChange={(e) => { changeData({ ...data, description: e.target.value }); }} placeholder="Give description about your question" ></textarea>
            </div>
            <div className="form-group">
                <label>Tags</label>
                <textarea value={data.tags} className="form-control" rows="2" onChange={(e) => { changeData({ ...data, tags: e.target.value }); }} placeholder="Add tags to your question" ></textarea>
            </div>
            <button type="button" className="btn btn-danger askFormButton" >Ask</button>
        </form>
    </div>
}

export default AskForm;