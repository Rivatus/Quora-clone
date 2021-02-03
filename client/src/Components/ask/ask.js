import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { askQuestion } from '../../actions/index.js';
import './ask.css';


const AskForm = () => {
    const [data, changeData] = useState({ heading: '', description: '', tags: '', postedBy: "admin" });

    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        const t = { heading: data.heading, description: data.description, tags: [data.tags], postedBy: data.postedBy };
        console.log(t);
        dispatch(askQuestion(t));
    }

    const status = useSelector((state) => state.message.status);

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
            <button type="submit" className="btn btn-danger askFormButton" >Ask</button>
            <div className="relative w-full mb-3 mt-8" style={{ display: `${status == 1 ? 'block' : 'none'}` }}>
                <div class="alert alert-danger" role="alert">
                    Some error was encountered!
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div>
            <div className="relative w-full mb-3 mt-8" style={{ display: `${status == 2 ? 'block' : 'none'}` }}>
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

export default AskForm;