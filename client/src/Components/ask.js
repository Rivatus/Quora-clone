import React from 'react';
import { useDispatch } from 'react-redux';
import { askQuestion } from '../actions/index.js';

const AskForm = () => {

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        //dispatch(askQuestion());
        askQuestion()(dispatch);
    }

    return <form onSubmit={handleSubmit}>
        <button>Submit</button>
    </form>
}

export default AskForm;