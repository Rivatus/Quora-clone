import React from 'react';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../../actions/index.js';

const AskForm = () => {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(askQuestion());
    }

    return <form>
        <div class="form-group">
            <label>Question</label>
            <textarea class="form-control" rows="3"></textarea>
        </div>
    </form>
}

export default AskForm;