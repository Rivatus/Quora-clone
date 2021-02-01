import React from 'react';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../../actions/index.js';

const AskForm = () => {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(askQuestion());
    }

    return <form onSubmit={handleSubmit}>
        <div class="form-group">
            <label>Question</label>
            <textarea class="form-control" rows="3" placeholder="Enter your question here..." ></textarea>
        </div>
        <div class="form-group">
            <label>Description</label>
            <textarea class="form-control" rows="5" placeholder="Give description about your question" ></textarea>
        </div>
        <div class="form-group">
            <label>Tags</label>
            <textarea class="form-control" rows="2" placeholder="Add tags to your question" ></textarea>
        </div>
        <button type="button" class="btn btn-danger">Ask</button>
    </form>
}

export default AskForm;