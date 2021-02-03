import * as api from '../api/index.js';

export const askQuestion = (question) => async (dispatch) => {
    try {
        console.log(question);
        const data=await api.askquestion(question);
        dispatch({ type: "Ask",payload:data});
    } catch (error) {
        console.log(error);
        dispatch({ type: "Ask",payload:2 });
    }
}