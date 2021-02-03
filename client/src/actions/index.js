import * as api from '../api/index.js';

export const askQuestion = (question) => async (dispatch) => {
    try {

        await api.askquestion(question);
        dispatch({ type: "Ask" });
    } catch (error) {
        console.log(error);
        dispatch({ type: "Failure" });
    }
}