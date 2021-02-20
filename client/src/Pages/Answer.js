import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AnswerQuestion from '../Components/answer/answer';

function Answer(props) {
    const questionId = useParams();
    const location = useLocation();

    return (
        <div>
            <AnswerQuestion questionHeading={location.state.heading} questionId={questionId} />
        </div>
    );
}

export default Answer;