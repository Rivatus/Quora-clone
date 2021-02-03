import * as api from '../api/index.js';

export const askQuestion = (question) => async (dispatch) => {
    try {
        console.log(question);
        const data=await api.askquestion(question);
        console.log("zi0");
        console.log(data);
        await dispatch({ type: "Ask",payload:data.data});
    } catch (error) {
        console.log(error);
        dispatch({ type: "Failure",payload:2 });
    }
}