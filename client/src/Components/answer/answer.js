import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { answer } from '../../actions/index.js';
import './answer.css';


const AnswerQuestion = (props) => {
    const [data, changeData] = useState();

    const dispatch = useDispatch();
    const user = useStore().getState().auth.authData;
    function clean() {
        changeData();
    }
    function clear() {
        dispatch({ type: 'Reset' });
        clean();
    }
    function handleSubmit(e) {
        e.preventDefault();
        answer({ answer: data, questionId: props.questionId, user: user });
        clean();
    }

    function handleChange(event, editor) {
        const answer = editor.getData();
        changeData(answer);
    }

    const status = useSelector((state) => state.message.status);

    return (
        <div className="Askform shadow-lg">
            <div className="form-group" >
                <label>{props.questionHeading}</label>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="form-group" >
                    <label>Answer</label>
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Enter your answer...</p>"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-danger askFormButton" > Answer </button>
                <button type="button" className="btn btn-primary clearButton" onClick={clear} > Clear </button>

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
    );
}

export default AnswerQuestion;