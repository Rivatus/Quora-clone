import React from 'react';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../../actions/index.js';
import './ask.css';
const AskForm = () => {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(askQuestion());
    }

    return <div className="Askform">
        <form onSubmit={handleSubmit} >
            <div className="form-group was-validated" >
                <label>Question</label>
                <textarea className="form-control is-invalid" rows="3" placeholder="Enter your question here..." required></textarea>
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" rows="5" placeholder="Give description about your question" ></textarea>
            </div>
            <div className="form-group">
                <label>Tags</label>
                <textarea className="form-control" rows="2" placeholder="Add tags to your question" ></textarea>
            </div>
            <button type="button" className="btn btn-danger askFormButton" >Ask</button>
        </form>
    </div>
}

export default AskForm;